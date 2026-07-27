// Maps real scroll position to the night's progress (0 = dusk → 1 = sunrise),
// anchored to where the story sections actually sit on the page — so deep
// night always lands on the constellations and pre-dawn on pricing,
// regardless of viewport height.

type Anchor = { y: number; p: number };

const SECTION_PHASES: Array<[selector: string, phase: number]> = [
  ["#why", 0.22], // nightfall while reading the intro
  ["#features", 0.45], // full night at the constellation cards
  ["#night", 0.62], // deepest night at the hypnogram
  ["#pricing", 0.82], // pre-dawn at pricing
];

let anchors: Anchor[] = [];
let measuredAt = 0;
let measuredHeight = 0;

function measure() {
  const vh = window.innerHeight;
  const doc = document.documentElement;
  const max = Math.max(1, doc.scrollHeight - vh);

  const pts: Anchor[] = [{ y: 0, p: 0 }];
  for (const [sel, p] of SECTION_PHASES) {
    const el = document.querySelector<HTMLElement>(sel);
    if (!el) continue;
    // the phase peaks when the section's top crosses mid-viewport
    const y = el.getBoundingClientRect().top + window.scrollY - vh * 0.55;
    pts.push({ y: Math.min(Math.max(y, 0), max), p });
  }
  pts.push({ y: max, p: 1 });
  pts.sort((a, b) => a.y - b.y);

  // drop anchors that would break monotonicity
  const clean: Anchor[] = [];
  for (const pt of pts) {
    const prev = clean[clean.length - 1];
    if (prev && (pt.y - prev.y < 1 || pt.p < prev.p)) continue;
    clean.push(pt);
  }
  anchors =
    clean.length >= 2
      ? clean
      : [
          { y: 0, p: 0 },
          { y: max, p: 1 },
        ];
  measuredAt = performance.now();
  measuredHeight = doc.scrollHeight;
}

export function nightProgress(scrollY: number): number {
  if (
    anchors.length === 0 ||
    performance.now() - measuredAt > 2000 ||
    document.documentElement.scrollHeight !== measuredHeight
  ) {
    measure();
  }

  const a = anchors;
  if (scrollY <= a[0].y) return a[0].p;
  for (let i = 0; i < a.length - 1; i++) {
    if (scrollY <= a[i + 1].y) {
      const t = (scrollY - a[i].y) / (a[i + 1].y - a[i].y);
      return a[i].p + (a[i + 1].p - a[i].p) * t;
    }
  }
  return a[a.length - 1].p;
}
