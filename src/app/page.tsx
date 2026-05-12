import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import { AnimatedStack } from "@/components/ui/AnimatedStack";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GiftsSection from "@/components/sections/GiftsSection";
import AboutPaulinaSection from "@/components/sections/AboutPaulinaSection";
import FaqSection from "@/components/sections/FaqSection";
import InscriptionSection from "@/components/sections/InscriptionSection";
import MidPageCta from "@/components/sections/MidPageCta";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FEF6EB] to-white">
        <Header />
        <HeroSection />
        <WhatIsSection />
        <div className="relative z-10 flex justify-center -mb-20 md:-mb-32">
          <AnimatedStack />
        </div>
      </div>
      <ActivitiesSection />
      <BenefitsSection />
      <MidPageCta />
      <GiftsSection />
      <AboutPaulinaSection />
      <FaqSection />
      <InscriptionSection />
    </>
  );
}
