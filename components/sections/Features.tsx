"use client";

import { motion } from "motion/react";
import {
  Radar,
  AudioLines,
  Sunrise,
  AlarmClockCheck,
  ChartSpline,
  House,
} from "lucide-react";

// Each feature card carries its own little constellation
const features = [
  {
    icon: Radar,
    title: "Contactless sensing",
    body: "Millimetre-wave radio reads breathing and movement through blankets. No ring, no watch, no strap — nothing to charge or remember.",
    stars: [
      [12, 30],
      [34, 12],
      [58, 26],
      [80, 10],
    ],
  },
  {
    icon: AudioLines,
    title: "Adaptive soundscapes",
    body: "Rain, surf, or engineered noise that senses you drifting off — and fades to silence the moment you're under.",
    stars: [
      [10, 14],
      [30, 32],
      [55, 12],
      [72, 30],
      [88, 16],
    ],
  },
  {
    icon: Sunrise,
    title: "Circadian light",
    body: "A warm, ember-toned wind-down at night and a 20-minute private sunrise in the morning, tuned to your chronotype.",
    stars: [
      [14, 26],
      [40, 10],
      [62, 30],
      [84, 18],
    ],
  },
  {
    icon: AlarmClockCheck,
    title: "Smart wake window",
    body: "Halo waits for your lightest sleep phase inside your wake window, so the alarm never drags you out of a deep cycle.",
    stars: [
      [10, 10],
      [32, 28],
      [56, 14],
      [78, 32],
    ],
  },
  {
    icon: ChartSpline,
    title: "A score you can feel",
    body: "One honest number each morning, built from your stages, disturbances and heart-rate trend — with the 'why' in plain words.",
    stars: [
      [16, 32],
      [36, 14],
      [60, 28],
      [82, 8],
    ],
  },
  {
    icon: House,
    title: "Plays well with home",
    body: "Hands your thermostat the cue to cool at night, dims your lights on wind-down, and talks to HomeKit, Alexa and Google.",
    stars: [
      [12, 12],
      [34, 30],
      [58, 8],
      [76, 26],
      [90, 12],
    ],
  },
];

function Constellation({ stars }: { stars: number[][] }) {
  const points = stars.map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <svg
      viewBox="0 0 100 40"
      className="absolute right-5 top-5 h-10 w-24 opacity-60"
      aria-hidden
    >
      <polyline
        points={points}
        fill="none"
        stroke="rgba(247,232,201,0.35)"
        strokeWidth="0.6"
      />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 1.6 : 1} fill="#f7e8c9" />
      ))}
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative z-10 px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.28em] text-foreground/45"
          >
            Written in the stars
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="display mt-5 text-4xl leading-[1.12] sm:text-5xl"
          >
            Six quiet superpowers,
            <br />
            <span className="display-italic text-primary">
              working while you don't.
            </span>
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-colors duration-500 hover:border-primary/25"
            >
              <Constellation stars={f.stars} />
              <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/55">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
