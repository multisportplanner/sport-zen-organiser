import Header from "@/components/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import UsagesSection from "@/components/landing/UsagesSection";
import IdentificationSection from "@/components/landing/IdentificationSection";
import SportsSection from "@/components/landing/SportsSection";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import EmotionSection from "@/components/landing/EmotionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WaitlistForm from "@/components/landing/WaitlistForm";
import PartnerTeaser from "@/components/landing/PartnerTeaser";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UsagesSection />
        <IdentificationSection />
        <SportsSection />
        <DifferentiationSection />
        <EmotionSection />
        <HowItWorksSection />
        <WaitlistForm />
        <PartnerTeaser />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
