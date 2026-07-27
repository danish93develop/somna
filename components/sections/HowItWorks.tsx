"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    kicker: "Place it",
    title: "Set Halo on your nightstand",
    body: "Plug it in within arm's reach of your pillow. There's no pairing ritual — the app finds it, asks which side of the bed is yours, and that's setup done.",
  },
  {
    num: "02",
    kicker: "Sleep on it",
    title: "It learns your night, on-device",
    body: "For the first three nights Halo simply observes — your natural bedtime, how long you take to drift, when deep sleep comes easiest. Your data never leaves the device.",
  },
  {
    num: "03",
    kicker: "Wake different",
    title: "Sound, light and timing take over",
    body: "Soundscapes fade you under, the room light winds down with you, and morning arrives as a slow sunrise at your lightest moment — not a siren at a fixed time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.28em] text-foreground/45"
          >
            The pre-dawn hours
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="display mt-5 text-4xl leading-[1.12] sm:text-5xl"
          >
            Three nights to{" "}
            <span className="display-italic text-primary">better mornings.</span>
          </motion.h2>
        </div>

        <div className="mt-14 space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              className="glass grid gap-5 rounded-3xl p-7 sm:grid-cols-[100px_180px_1fr] sm:items-start sm:p-9"
            >
              <span className="display text-5xl text-primary/40">{s.num}</span>
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/45 sm:pt-3">
                {s.kicker}
              </p>
              <div>
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="mt-2.5 max-w-xl leading-relaxed text-foreground/55">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
