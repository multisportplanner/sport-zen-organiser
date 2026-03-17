import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CoachCTA = () => {
  const scrollToForm = () => {
    document.getElementById("coach-form")?.scrollIntoView({ behavior: "smooth" });
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
            Concentrez-vous sur ce que vous faites de mieux.
            <br />
            <span className="text-gradient">MSP s'occupe du reste.</span>
          </h2>

          <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
            Rejoindre les coachs MSP
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachCTA;
