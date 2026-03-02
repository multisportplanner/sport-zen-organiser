import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroGroupImg from "@/assets/hero-group.jpg";

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

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Un rendez-vous par semaine, en petit groupe, entre Nice et Sophia.
            <br />
            Tu donnes tes disponibilités une fois.
            <br />
            Ensuite, tu viens.
          </p>

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden lg:block"
        >
          <img
            src={heroGroupImg}
            alt="Petit groupe en séance de sport en plein air à Nice"
            className="rounded-3xl shadow-card-hover object-cover w-full aspect-[4/3]"
            loading="eager"
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
