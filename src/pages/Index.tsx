import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ActivitiesSection from "@/components/landing/ActivitiesSection";
import PilotSection from "@/components/landing/PilotSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import WaitlistForm from "@/components/landing/WaitlistForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ActivitiesSection />
      <PilotSection />
      <FinalCTASection />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
