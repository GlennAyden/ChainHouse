import HeroSection from "@/components/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import QuickLinksSection from "@/components/landing/QuickLinksSection";
import PartnershipSection from "@/components/landing/PartnershipSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-[#FAFAFA]">
      <HeroSection />
      <KeyFeaturesSection />
      <CallToActionSection />
      <QuickLinksSection />
      <PartnershipSection />
      <SiteFooter />
    </main>
  );
}