"use client";

import { useEffect, useState } from "react";

// The page is one night: 9:00 PM at the top, 7:00 AM at the bottom.
const NIGHT_MINUTES = 10 * 60;

function phaseFor(p: number) {
  if (p < 0.1) return "dusk";
  if (p < 0.3) return "nightfall";
  if (p < 0.62) return "deep night";
  if (p < 0.85) return "pre-dawn";
  return "sunrise";
}

export default function ScrollClock() {
  const [time, setTime] = useState("21:00");
  const [phase, setPhase] = useState("dusk");

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      const mins = Math.round(p * NIGHT_MINUTES);
      const total = (21 * 60 + mins) % (24 * 60);
      const hh = String(Math.floor(total / 60)).padStart(2, "0");
      const mm = String(total % 60).padStart(2, "0");
      setTime(`${hh}:${mm}`);
      setPhase(phaseFor(p));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="glass fixed bottom-5 right-5 z-50 hidden items-center gap-2.5 rounded-full py-2 pl-3.5 pr-4 sm:flex">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
      </span>
      <span className="font-mono text-xs tabular-nums text-foreground/90">
        {time}
      </span>
      <span className="text-[11px] uppercase tracking-[0.18em] text-foreground/50">
        {phase}
      </span>
    </div>
  );
}
