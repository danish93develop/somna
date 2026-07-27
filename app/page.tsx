import SkyScape from "@/components/SkyScape";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollClock from "@/components/ScrollClock";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import NightIntro from "@/components/sections/NightIntro";
import Features from "@/components/sections/Features";
import Hypnogram from "@/components/sections/Hypnogram";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import DawnCta from "@/components/sections/DawnCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SkyScape />
      <ScrollClock />
      <Navbar />
      <main>
        <Hero />
        <NightIntro />
        <Features />
        <Hypnogram />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <DawnCta />
      </main>
      <Footer />
    </>
  );
}
