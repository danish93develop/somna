import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

// Update after deploy if Vercel assigns a different domain
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://somna.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Somna — The bedside companion that understands your sleep",
  description:
    "Somna Halo senses your sleep without a wearable, soothes you into deeper rest with adaptive soundscapes, and wakes you gently with light. Scroll from dusk to dawn.",
  authors: [{ name: "Danish Suri", url: "https://github.com/danish93develop/" }],
  creator: "Danish Suri",
  openGraph: {
    title: "Somna — Fall asleep to something beautiful",
    description:
      "A contactless sleep companion that listens to your night and wakes you at the perfect moment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
