"use client";

import { motion } from "motion/react";

// Sleep stages through the night: 0=Awake 1=REM 2=Light 3=Deep, width = minutes
const NIGHT: Array<[stage: number, mins: number]> = [
  [0, 14],
  [2, 42],
  [3, 68],
  [2, 30],
  [1, 26],
  [2, 44],
  [3, 52],
  [2, 26],
  [1, 38],
  [2, 40],
  [1, 44],
  [2, 28],
  [0, 10],
];

const STAGE_Y = [16, 58, 100, 142]; // Awake, REM, Light, Deep
const LABELS = ["Awake", "REM", "Light", "Deep"];
const W = 800;
const H = 170;

function buildPath() {
  const total = NIGHT.reduce((a, [, m]) => a + m, 0);
  let x = 0;
  let d = "";
  NIGHT.forEach(([stage, mins], i) => {
    const w = (mins / total) * W;
    const y = STAGE_Y[stage];
    d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    x += w;
    d += ` L ${x} ${y}`;
  });
  return d;
}

const stats = [
  { value: "7h 42m", label: "time asleep" },
  { value: "21%", label: "deep sleep" },
  { value: "96", label: "sleep score" },
  { value: "06:48", label: "woken at lightest phase" },
];

export default function Hypnogram() {
  const path = buildPath();

  return (
    <section id="night" className="relative z-10 px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.28em] text-foreground/45"
          >
            While you were dreaming
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="display mt-5 text-4xl leading-[1.12] sm:text-5xl"
          >
            Your night,{" "}
            <span className="display-italic text-primary">visualized.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-foreground/60"
          >
            Every morning, Somna draws the story of your night — each descent
            into deep sleep, every dream, and the exact moment it chose to wake
            you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="glass mt-14 rounded-3xl p-6 sm:p-10"
        >
          <div className="flex items-baseline justify-between">
            <p className="text-sm text-foreground/70">Last night · Somna Halo</p>
            <p className="font-mono text-xs text-foreground/45">
              23:04 → 06:48
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="hidden shrink-0 flex-col justify-between py-1 text-right sm:flex">
              {LABELS.map((l) => (
                <span
                  key={l}
                  className="text-[11px] uppercase tracking-[0.14em] text-foreground/40"
                >
                  {l}
                </span>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full"
                role="img"
                aria-label="Hypnogram of last night's sleep stages"
              >
                {STAGE_Y.map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2={W}
                    y1={y}
                    y2={y}
                    stroke="rgba(255,255,255,0.07)"
                    strokeDasharray="3 6"
                  />
                ))}
                {/* soft area under the line */}
                <motion.path
                  d={path}
                  fill="none"
                  stroke="#f7e8c9"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(247,232,201,0.45))",
                  }}
                />
              </svg>
              <div className="mt-3 flex justify-between font-mono text-[11px] text-foreground/40">
                <span>11 PM</span>
                <span>1 AM</span>
                <span>3 AM</span>
                <span>5 AM</span>
                <span>7 AM</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              >
                <p className="display text-2xl text-primary">{s.value}</p>
                <p className="mt-1 text-xs text-foreground/50">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
