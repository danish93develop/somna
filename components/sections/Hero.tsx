"use client";

import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function HaloDevice() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-88 sm:w-88">
      {/* ambient glow */}
      <div className="absolute inset-0 animate-breathe rounded-full bg-[radial-gradient(circle,rgba(247,232,201,0.28),transparent_65%)]" />
      {/* the orb */}
      <div className="animate-float relative size-48 rounded-full sm:size-60">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#fdf6e3_0%,#e8d9b8_28%,#8d7f9e_62%,#2c2750_100%)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_60px_-10px_rgba(247,232,201,0.35)]" />
        <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.5),transparent_45%)]" />
        {/* breathing light ring */}
        <div className="absolute inset-x-[22%] bottom-[16%] h-1.5 animate-breathe rounded-full bg-primary/90 blur-[2px]" />
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
