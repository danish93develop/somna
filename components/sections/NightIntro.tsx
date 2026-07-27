"use client";

import { motion } from "motion/react";

const stats = [
  { value: "0", label: "wearables to charge" },
  { value: "40cm", label: "sensing range, through blankets" },
  { value: "100%", label: "processed on-device" },
];

export default function NightIntro() {
  return (
    <section id="why" className="relative z-10 px-5 py-36 sm:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.28em] text-foreground/45"
        >
          As the sky darkens
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="display mt-6 text-4xl leading-[1.15] sm:text-5xl lg:text-6xl"
        >
          Your night has a rhythm.
          <br />
          <span className="display-italic text-primary">Somna listens for it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-foreground/60"
        >
          Using gentle radio sensing — the same principle as a whisper of
          radar — Halo reads your breathing and movement from the nightstand.
          Nothing touches your skin. Nothing films your room. It simply knows
          when you drift, when you dream, and when you're ready to surface.
        </motion.p>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="glass rounded-3xl px-6 py-8"
            >
              <p className="display text-4xl text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-foreground/55">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
