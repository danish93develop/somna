"use client";

import { motion } from "motion/react";
import { Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DawnCta() {
  return (
    <section className="relative z-10 flex min-h-[85svh] flex-col items-center justify-center px-5 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_50px_-8px_rgba(255,179,107,0.6)]"
      >
        <Sunrise className="size-7" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="display mt-8 max-w-3xl text-4xl leading-[1.12] sm:text-6xl"
      >
        Wake up on the{" "}
        <span className="display-italic text-primary">right side</span> of the
        morning.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.22 }}
        className="mt-6 max-w-xl text-lg text-foreground/65"
      >
        You just scrolled through one night with Somna. Imagine sleeping
        through the real thing — starting tonight, free for 30 nights.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.34 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button size="lg" asChild>
          <a href="#pricing">Start your 30-night trial</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#top">Watch the night again</a>
        </Button>
      </motion.div>
    </section>
  );
}
