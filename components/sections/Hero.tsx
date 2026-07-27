"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function HaloDevice() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 9).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 11).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(34 + x * 22).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(30 + y * 22).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--gx", "34%");
    el.style.setProperty("--gy", "30%");
  };

  return (
    <div
      ref={tiltRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-88 sm:w-88"
      style={{ perspective: "900px" }}
    >
      {/* ambient glow */}
      <div className="absolute inset-0 animate-breathe rounded-full bg-[radial-gradient(circle,rgba(247,232,201,0.28),transparent_65%)]" />

      {/* tilt frame (cursor-reactive), float rides inside it */}
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="animate-float relative size-48 rounded-full sm:size-60">
          {/* sphere body — highlight follows the cursor via --gx/--gy */}
          <div
            className="absolute inset-0 rounded-full shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_60px_-10px_rgba(247,232,201,0.35)]"
            style={{
              background:
                "radial-gradient(circle at var(--gx, 34%) var(--gy, 30%), #fff8e8 0%, #f0e1c0 20%, #b9a3c9 48%, #5d4a86 72%, #241f4e 100%)",
            }}
          />
          {/* glass rim + inner shading */}
          <div className="absolute inset-0 rounded-full border border-white/25 shadow-[inset_0_-20px_44px_rgba(16,12,44,0.55),inset_0_12px_30px_rgba(255,255,255,0.3)]" />
          {/* specular highlight */}
          <div
            className="absolute size-[38%] rounded-full bg-white/60 blur-md"
            style={{
              left: "calc(var(--gx, 34%) - 19%)",
              top: "calc(var(--gy, 30%) - 22%)",
            }}
          />
          {/* thin reflection streak */}
          <div className="absolute left-[16%] top-[54%] h-[26%] w-[5%] -rotate-[24deg] rounded-full bg-gradient-to-b from-white/35 to-transparent blur-[3px]" />
          {/* breathing light ring */}
          <div className="absolute inset-x-[22%] bottom-[16%] h-1.5 animate-breathe rounded-full bg-primary/90 blur-[2px]" />
        </div>

        {/* dock base + soft ground shadow */}
        <div className="absolute -bottom-9 left-1/2 h-2.5 w-28 -translate-x-1/2 rounded-full border border-white/10 bg-white/8 sm:-bottom-10 sm:w-32" />
        <div className="absolute -bottom-7 left-1/2 h-5 w-40 -translate-x-1/2 rounded-[50%] bg-black/45 blur-lg sm:w-48" />
      </div>

      {/* floating stat chips */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="glass absolute -left-2 top-12 rounded-2xl px-4 py-2.5 sm:left-0"
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/50">
          Sleep score
        </p>
        <p className="font-mono text-lg text-primary">96</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.8 }}
        className="glass absolute -right-2 bottom-14 rounded-2xl px-4 py-2.5 sm:right-0"
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/50">
          Deep sleep
        </p>
        <p className="font-mono text-lg text-foreground">+38%</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-svh flex-col justify-center px-5 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="glow">
              <Sparkles /> Meet Somna Halo
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="display mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Fall asleep to{" "}
            <span className="display-italic text-primary">nothing</span> on
            your mind.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/65"
          >
            Somna Halo sits at your bedside and senses your sleep — no
            wearable, no camera. It soothes you under with adaptive
            soundscapes, guards your deep sleep, and wakes you with a private
            sunrise at the perfect moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#pricing">Start your 30-night trial</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#why">How it listens</a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 text-sm text-foreground/45"
          >
            30 nights free · No wearable required · Everything stays on the
            device
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <HaloDevice />
        </motion.div>
      </div>

      <motion.a
        href="#why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-foreground"
      >
        <span className="text-[11px] uppercase tracking-[0.22em]">
          Scroll into the night
        </span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
