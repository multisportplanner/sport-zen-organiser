import Header from "@/components/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InsightSection from "@/components/landing/InsightSection";
import SolutionSection from "@/components/landing/SolutionSection";
import SocialSection from "@/components/landing/SocialSection";
import IdentificationSection from "@/components/landing/IdentificationSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SportsSection from "@/components/landing/SportsSection";
import LaunchSection from "@/components/landing/LaunchSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import WaitlistForm from "@/components/landing/WaitlistForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <ProblemSection />
        <InsightSection />
        <SolutionSection />
        <SocialSection />
        <HowItWorksSection />
        <IdentificationSection />
        <SportsSection />
        <LaunchSection />
        <FinalCTASection />
        <WaitlistForm />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
