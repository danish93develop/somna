import { MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mail, GitHub, LinkedIn, Instagram, Upwork, Contra } from "./icons";

const EMAIL = "danish93develop@gmail.com";
const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01a9c332ce05d023bc?mp_source=share";

const product = [
  { label: "Why Somna", href: "#why" },
  { label: "Features", href: "#features" },
  { label: "Your Night", href: "#night" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const connect = [
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail, external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danish-suri-63bab5b4/",
    Icon: LinkedIn,
    external: true,
  },
  { label: "Upwork", href: UPWORK_URL, Icon: Upwork, external: true },
  {
    label: "Instagram",
    href: "https://www.instagram.com/builtbydandev/",
    Icon: Instagram,
    external: true,
  },
  {
    label: "Contra",
    href: "https://contra.com/danish_suri?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=danish_suri",
    Icon: Contra,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/danish93develop/",
    Icon: GitHub,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2">
            <MoonStar className="size-5 text-primary" />
            <span className="display text-xl">somna</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/45">
            The bedside companion that understands your sleep. Designed for
            the hours you don't remember.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            Product
          </p>
          <ul className="mt-4 space-y-2.5">
            {product.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            {connect.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-2.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  <span className="grid size-7 place-items-center rounded-lg border border-white/10 bg-white/5 text-foreground/70 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    <Icon className="size-3.5" />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* lead-gen card */}
        <div className="glass rounded-3xl p-6">
          <div className="flex items-center gap-2 text-[13px] font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for freelance work
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-foreground/55">
            Need a landing page or web app that feels like this one? I design
            &amp; build them end-to-end.
          </p>
          <Button className="mt-4 w-full" asChild>
            <a href={`mailto:${EMAIL}?subject=Project%20inquiry`}>
              Start a project →
            </a>
          </Button>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-xs text-foreground/45 transition-colors hover:text-primary"
          >
            or hire me on Upwork
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-[13px] text-foreground/40 sm:flex-row">
        <p>
          © 2026 Somna · A portfolio concept designed &amp; built by{" "}
          <a
            href="https://github.com/danish93develop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Danish Suri
          </a>
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 text-foreground/50 transition-colors hover:text-primary"
        >
          <Mail className="size-4" />
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}
