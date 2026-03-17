import Header from "@/components/Header";
import CoachHero from "@/components/coach/CoachHero";
import CoachProblem from "@/components/coach/CoachProblem";
import CoachSolution from "@/components/coach/CoachSolution";
import CoachHowItWorks from "@/components/coach/CoachHowItWorks";
import CoachSessions from "@/components/coach/CoachSessions";
import CoachBenefits from "@/components/coach/CoachBenefits";
import CoachSports from "@/components/coach/CoachSports";
import CoachLaunchOffer from "@/components/coach/CoachLaunchOffer";
import CoachConditions from "@/components/coach/CoachConditions";
import CoachZone from "@/components/coach/CoachZone";
import CoachFAQ from "@/components/coach/CoachFAQ";
import CoachCTA from "@/components/coach/CoachCTA";
import CoachForm from "@/components/coach/CoachForm";
import Footer from "@/components/landing/Footer";

const Coach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <CoachHero />
        <CoachProblem />
        <CoachSolution />
        <CoachHowItWorks />
        <CoachSessions />
        <CoachBenefits />
        <CoachCTA />
        <CoachSports />
        <CoachLaunchOffer />
        <CoachConditions />
        <CoachZone />
        <CoachFAQ />
        <CoachForm />
        <Footer />
      </main>
    </div>
  );
};

export default Coach;
