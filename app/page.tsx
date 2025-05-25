"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { DestinationsSection } from "@/components/sections/destinations-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProcessSection } from "@/components/sections/process-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FaqSection } from "@/components/sections/faq-section";
import { InfographicsSection } from "@/components/sections/infographics-section";
import { ProgramFinderSection } from "@/components/program-finder/ProgramFinderSection";
import { VideoTestimonialsSection } from "@/components/sections/video-testimonials";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <VideoTestimonialsSection />
      <ProgramFinderSection />
      <ProcessSection />
      <InfographicsSection />
      <StatsSection />
      <DestinationsSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}