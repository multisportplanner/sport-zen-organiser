import Header from "@/components/Header";
import CoachHero from "@/components/coach/CoachHero";
import CoachClarification from "@/components/coach/CoachClarification";
import CoachProblem from "@/components/coach/CoachProblem";
import CoachSolution from "@/components/coach/CoachSolution";
import CoachHowItWorks from "@/components/coach/CoachHowItWorks";
import CoachBenefits from "@/components/coach/CoachBenefits";
import CoachCTA from "@/components/coach/CoachCTA";
import CoachSports from "@/components/coach/CoachSports";
import CoachSessions from "@/components/coach/CoachSessions";
import CoachLaunchOffer from "@/components/coach/CoachLaunchOffer";
import CoachConditions from "@/components/coach/CoachConditions";
import CoachZone from "@/components/coach/CoachZone";
import CoachFAQ from "@/components/coach/CoachFAQ";
import CoachForm from "@/components/coach/CoachForm";
import Footer from "@/components/landing/Footer";

const Coach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <CoachHero />
        <CoachClarification />
        <CoachProblem />
        <CoachSolution />
        <CoachHowItWorks />
        <CoachBenefits />
        <CoachCTA />
        <CoachSports />
        <CoachSessions />
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
