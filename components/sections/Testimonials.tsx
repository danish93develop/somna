"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const quotes = [
  {
    text: "I stopped checking my phone in bed because I didn't want to interrupt the wind-down light. That alone fixed half my sleep.",
    name: "Maya R.",
    role: "ER nurse, night shifts",
  },
  {
    text: "The alarm doesn't feel like an alarm. The room just… becomes morning, and I'm awake before I realize it happened.",
    name: "Jonas K.",
    role: "Founder, chronically underslept",
  },
  {
    text: "My ring told me I slept badly. Somna is the first thing that actually changed how I slept.",
    name: "Priya S.",
    role: "Former wearable devotee",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 px-5 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-sm text-foreground/60"
        >
          <span className="flex gap-0.5 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </span>
          4.9 from 2,300+ well-rested sleepers
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: i * 0.13 }}
              className="glass flex flex-col justify-between rounded-3xl p-7"
            >
              <blockquote className="display-italic text-lg leading-relaxed text-foreground/85">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-medium">{q.name}</p>
                <p className="text-xs text-foreground/45">{q.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
