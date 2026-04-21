import Header from "@/components/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import UsagesSection from "@/components/landing/UsagesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProjectionSection from "@/components/landing/ProjectionSection";
import DeplacementSection from "@/components/landing/DeplacementSection";
import SportsSection from "@/components/landing/SportsSection";
import ContactSection from "@/components/landing/ContactSection";
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
        <HowItWorksSection />
        <ProjectionSection />
        <DeplacementSection />
        <SportsSection />
        <ContactSection />
        <PartnerTeaser />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
