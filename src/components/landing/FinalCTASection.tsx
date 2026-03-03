import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            Peut-être que ce qu'il te manque
            <br />
            ce n'est pas plus de motivation.
            <br />
            <span className="text-gradient">C'est un rendez-vous.</span>
          </h2>

          <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
            Je rejoins la liste d'attente
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Accès en avant-première • Gratuit • Désinscription en 1 clic
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
