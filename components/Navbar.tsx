"use client";

import { useEffect, useState } from "react";
import { MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#why", label: "Why Somna" },
  { href: "#features", label: "Features" },
  { href: "#night", label: "Your Night" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-500",
          scrolled ? "glass mx-4 h-14 sm:mx-auto" : "h-14 bg-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <MoonStar className="size-5 text-primary" />
          <span className="display text-xl tracking-tight">somna</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/65 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Button size="sm" asChild>
          <a href="#pricing">Get Somna</a>
        </Button>
      </nav>
    </header>
  );
}
