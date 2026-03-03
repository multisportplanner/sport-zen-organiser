import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Users, Bell } from "lucide-react";

const AppMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="flex justify-center lg:justify-start my-8"
  >
    {/* Phone frame */}
    <div className="relative w-[260px] rounded-[2.5rem] border-[6px] border-foreground/10 bg-card shadow-card-hover p-1">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/10 rounded-b-2xl" />
      
      {/* Screen */}
      <div className="rounded-[2rem] bg-background overflow-hidden pt-8 pb-4 px-4 space-y-3">
        {/* Status bar */}
        <div className="flex items-center justify-between text-[10px] text-muted-foreground px-1 mb-2">
          <span className="font-medium">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3.5 h-2 rounded-sm border border-muted-foreground/50" />
          </div>
        </div>

        {/* App header */}
        <div className="text-center mb-3">
          <p className="text-xs font-semibold text-primary tracking-wide">MON SPORT PERSO</p>
        </div>

        {/* Card */}
        <div className="rounded-xl bg-muted/50 border border-border p-3.5 space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
              <CalendarDays className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Mercredi 18h</p>
              <p className="text-[10px] text-muted-foreground">Renforcement musculaire</p>
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <MapPin className="w-3 h-3 text-secondary" />
            <span>Parc Valmasque, Sophia</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <Users className="w-3 h-3 text-secondary" />
            <span>Petit groupe confirmé — 6/8</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-accent">
            <Bell className="w-3 h-3" />
            <span className="font-medium">Rappel activé</span>
          </div>
        </div>

        {/* Bottom button */}
        <div className="rounded-lg bg-gradient-cta py-2 text-center">
          <span className="text-[11px] font-semibold text-primary-foreground">J'y serai 👋</span>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pt-2">
          <div className="w-24 h-1 rounded-full bg-foreground/10" />
        </div>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-cta animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Lancement pilote — Nice ↔ Sophia Antipolis
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Le sport,{" "}
              <span className="text-gradient">sans l'organiser.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              Un rendez-vous par semaine, en petit groupe, entre Nice et Sophia.
              <br />
              Tu donnes tes disponibilités une fois.
              <br />
              Ensuite, tu viens.
            </p>

            {/* App Mockup - visible on mobile, hidden on lg */}
            <div className="lg:hidden">
              <AppMockup />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
                Je rejoins la liste d'attente
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Accès en avant-première • Gratuit • Désinscription en 1 clic
              </p>
            </motion.div>
          </motion.div>

          {/* App Mockup - visible on lg, replaces old photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:flex justify-center"
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
