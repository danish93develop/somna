"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I have to wear anything?",
    a: "No. Halo senses breathing and movement from your nightstand using low-power millimetre-wave radio — through duvets, weighted blankets, and darkness. There's nothing to wear, charge, or forget.",
  },
  {
    q: "Is it watching or recording my bedroom?",
    a: "Halo has no camera and no microphone that records. The radio sensing produces motion data, not images, and every bit of it is processed on the device itself. Nights are summarized locally; raw signals are never uploaded.",
  },
  {
    q: "I share a bed. Will it mix us up?",
    a: "During setup you tell Halo which side is yours, and it senses within that zone. With Somna+ Partner Mode, one Halo tracks both sleepers separately — including separate wake windows, so your 6 AM sunrise doesn't wake them.",
  },
  {
    q: "Do I need a subscription?",
    a: "No. Halo works fully — sensing, soundscapes, light, smart wake, morning score — with no subscription, forever. Somna+ adds long-term trends, coaching and partner mode, and your first 12 months are included with the device.",
  },
  {
    q: "What if it doesn't help me sleep?",
    a: "You get 30 nights to find out — roughly one full cycle of good and bad weeks. If you're not waking up better, return it for a full refund and we'll pay the shipping in both directions.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative z-10 px-5 py-28 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.28em] text-foreground/45"
          >
            Before you drift off
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="display mt-5 text-4xl leading-[1.12] sm:text-5xl"
          >
            Questions people ask{" "}
            <span className="display-italic text-primary">at 2 AM.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass mt-12 rounded-3xl px-7 py-3 sm:px-9"
        >
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
