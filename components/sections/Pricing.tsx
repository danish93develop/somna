"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Somna App",
    price: "Free",
    period: "",
    tagline: "Phone-based sleep tracking to start the habit.",
    features: [
      "Bedtime & wake-time rhythm",
      "Basic sleep diary",
      "Wind-down soundscape (3 scenes)",
      "Weekly sleep letter",
    ],
    cta: "Download the app",
    featured: false,
  },
  {
    name: "Halo",
    price: "$199",
    period: "one-time",
    tagline: "The bedside device, with everything on-board.",
    features: [
      "Contactless sleep sensing",
      "Full adaptive soundscape library",
      "Circadian sunrise & wind-down light",
      "Smart wake window",
      "12 months of Somna+ included",
    ],
    cta: "Start 30-night trial",
    featured: true,
  },
  {
    name: "Somna+",
    price: "$6",
    period: "/month",
    tagline: "Deeper insight, for Halo or the app alone.",
    features: [
      "Full sleep-stage history",
      "Chronotype & trend coaching",
      "Smart-home automations",
      "Partner mode (two sleepers, one Halo)",
    ],
    cta: "Add Somna+",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.28em] text-foreground/45"
          >
            Almost morning
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="display mt-5 text-4xl leading-[1.12] sm:text-5xl"
          >
            One device.{" "}
            <span className="display-italic text-primary">
              Every night after.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-foreground/60"
          >
            Try Halo for 30 nights. If your mornings don't feel different,
            send it back — we'll cover the shipping both ways.
          </motion.p>
        </div>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: i * 0.12 }}
              className={cn(
                "glass relative flex flex-col rounded-3xl p-8",
                plan.featured &&
                  "border-primary/30 shadow-[0_0_60px_-18px_rgba(247,232,201,0.45)] lg:-my-3 lg:py-11"
              )}
            >
              {plan.featured && (
                <Badge
                  variant="glow"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Most loved
                </Badge>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-1 text-sm text-foreground/50">{plan.tagline}</p>
              <p className="mt-6">
                <span className="display text-5xl text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1.5 text-sm text-foreground/50">
                    {plan.period}
                  </span>
                )}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground/70"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
