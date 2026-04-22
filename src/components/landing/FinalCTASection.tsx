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
            Prêt à t'y mettre sans <span className="text-gradient">organiser ?</span>
          </h2>

          <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
            Je me lance simplement
          </Button>
          <p className="text-xs text-muted-foreground/70 mt-3">
            ✔️ 30 secondes &nbsp;•&nbsp; ✔️ 3 questions &nbsp;•&nbsp; ✔️ zéro organisation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
