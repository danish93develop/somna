"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];

const hex = (h: string): RGB => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];

// Sky palette keyframes across the scroll journey: dusk → night → deep night → pre-dawn → sunrise
const KEYS = [
  { p: 0.0, top: hex("#241f4e"), mid: hex("#5b3a68"), hor: hex("#e8935f"), glow: 0.9 },
  { p: 0.12, top: hex("#141433"), mid: hex("#2a2454"), hor: hex("#7a4a63"), glow: 0.45 },
  { p: 0.3, top: hex("#070a18"), mid: hex("#0d1130"), hor: hex("#1a1f42"), glow: 0.12 },
  { p: 0.62, top: hex("#04060f"), mid: hex("#0a0e24"), hor: hex("#12172f"), glow: 0.08 },
  { p: 0.82, top: hex("#0a0c22"), mid: hex("#231c47"), hor: hex("#4c2b52"), glow: 0.3 },
  { p: 1.0, top: hex("#2a2150"), mid: hex("#8f4a72"), hor: hex("#ffb36b"), glow: 1.0 },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpRGB = (a: RGB, b: RGB, t: number): RGB => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];
const css = (c: RGB, a = 1) =>
  `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;

function sampleSky(p: number) {
  let i = 0;
  while (i < KEYS.length - 2 && p > KEYS[i + 1].p) i++;
  const a = KEYS[i];
  const b = KEYS[i + 1];
  const t = Math.min(1, Math.max(0, (p - a.p) / (b.p - a.p)));
  // smoothstep for gentler transitions
  const s = t * t * (3 - 2 * t);
  return {
    top: lerpRGB(a.top, b.top, s),
    mid: lerpRGB(a.mid, b.mid, s),
    hor: lerpRGB(a.hor, b.hor, s),
    glow: lerp(a.glow, b.glow, s),
  };
}

// How "night" it is: 0 at dusk/dawn edges, 1 in deep night
function nightAmount(p: number) {
  const rise = Math.min(1, Math.max(0, (p - 0.06) / 0.22));
  const fall = Math.min(1, Math.max(0, (0.96 - p) / 0.18));
  return Math.min(rise, fall);
}

interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

export default function SkyScape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let smoothP = 0;
    let meteor: Meteor | null = null;
    let nextMeteorAt = 4000 + Math.random() * 5000;
    let last = performance.now();

    const stars: Star[] = Array.from({ length: 220 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.8,
      r: 0.4 + Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.4,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      const dt = now - last;
      last = now;

      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const target = Math.min(1, Math.max(0, window.scrollY / max));
      smoothP += (target - smoothP) * 0.07;
      const p = smoothP;

      const sky = sampleSky(p);
      const night = nightAmount(p);

      // --- sky gradient ---
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, css(sky.top));
      g.addColorStop(0.55, css(sky.mid));
      g.addColorStop(1, css(sky.hor));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // --- horizon glow (sun below/at the horizon) ---
      if (sky.glow > 0.02) {
        const gx = p < 0.5 ? w * 0.28 : w * 0.72;
        const glow = ctx.createRadialGradient(gx, h * 1.05, 0, gx, h * 1.05, h * 0.9);
        const warm: RGB = p < 0.5 ? hex("#ffc07a") : hex("#ffd9a0");
        glow.addColorStop(0, css(warm, 0.55 * sky.glow));
        glow.addColorStop(0.5, css(warm, 0.12 * sky.glow));
        glow.addColorStop(1, css(warm, 0));
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
      }

      // --- setting sun (dusk) / rising sun (dawn) ---
      const drawSun = (x: number, y: number, alpha: number) => {
        if (alpha <= 0.01) return;
        const r = Math.max(26, h * 0.045);
        const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
        halo.addColorStop(0, `rgba(255,214,150,${0.5 * alpha})`);
        halo.addColorStop(1, "rgba(255,214,150,0)");
        ctx.fillStyle = halo;
        ctx.fillRect(x - r * 5, y - r * 5, r * 10, r * 10);
        const body = ctx.createRadialGradient(x, y, 0, x, y, r);
        body.addColorStop(0, `rgba(255,240,205,${alpha})`);
        body.addColorStop(1, `rgba(255,183,110,${alpha})`);
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      };
      if (p < 0.14) {
        const t = p / 0.14; // sinking below horizon
        drawSun(w * 0.28, h * 0.86 + t * h * 0.22, 1 - t);
      }
      if (p > 0.84) {
        const t = (p - 0.84) / 0.16; // rising from horizon
        drawSun(w * 0.72, h * 1.04 - t * h * 0.26, t);
      }

      // --- stars ---
      if (night > 0.02) {
        for (const s of stars) {
          const tw = 0.45 + 0.55 * Math.sin(now * 0.001 * s.speed + s.phase);
          ctx.globalAlpha = night * tw * 0.9;
          ctx.fillStyle = "#f4f1ea";
          ctx.beginPath();
          ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      // --- moon: rises and crosses the sky through the night ---
      if (p > 0.13 && p < 0.9) {
        const mt = (p - 0.13) / 0.77; // 0..1 across the night
        const mx = w * (0.85 - mt * 0.7);
        const my = h * (0.5 - Math.sin(mt * Math.PI) * 0.32);
        const fade = Math.min(1, Math.min(mt / 0.12, (1 - mt) / 0.12));
        const mr = Math.max(20, h * 0.032);

        const halo = ctx.createRadialGradient(mx, my, 0, mx, my, mr * 6);
        halo.addColorStop(0, `rgba(230,235,255,${0.16 * fade * night})`);
        halo.addColorStop(1, "rgba(230,235,255,0)");
        ctx.fillStyle = halo;
        ctx.fillRect(mx - mr * 6, my - mr * 6, mr * 12, mr * 12);

        ctx.globalAlpha = fade * (0.5 + 0.5 * night);
        ctx.fillStyle = "#eef0f6";
        ctx.beginPath();
        ctx.arc(mx, my, mr, 0, Math.PI * 2);
        ctx.fill();
        // carve a crescent with the sky color
        ctx.fillStyle = css(sky.mid);
        ctx.beginPath();
        ctx.arc(mx - mr * 0.38, my - mr * 0.18, mr * 0.92, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // --- occasional shooting star in deep night ---
      nextMeteorAt -= dt;
      if (!meteor && nextMeteorAt <= 0 && night > 0.6) {
        meteor = {
          x: w * (0.2 + Math.random() * 0.6),
          y: h * (0.08 + Math.random() * 0.25),
          vx: -(0.35 + Math.random() * 0.25),
          vy: 0.16 + Math.random() * 0.12,
          life: 1,
        };
        nextMeteorAt = 5000 + Math.random() * 7000;
      }
      if (meteor) {
        meteor.x += meteor.vx * dt;
        meteor.y += meteor.vy * dt;
        meteor.life -= dt / 900;
        if (meteor.life <= 0) {
          meteor = null;
        } else {
          const m = meteor;
          const tailX = m.x - m.vx * 220;
          const tailY = m.y - m.vy * 220;
          const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
          grad.addColorStop(0, `rgba(244,241,234,${0.9 * m.life * night})`);
          grad.addColorStop(1, "rgba(244,241,234,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 z-0 h-full w-full"
    />
  );
}
