import { motion } from "framer-motion";
import { Percent } from "lucide-react";

const CoachLaunchOffer = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
          <Percent className="w-7 h-7 text-primary-foreground" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Offre de{" "}
          <span className="text-gradient">lancement</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Pour accompagner le lancement de MSP, les premiers coachs partenaires bénéficient d'une{" "}
          <strong className="text-foreground">commission réduite de 50 %</strong> pendant la phase de lancement.
        </p>
        <p className="text-muted-foreground mt-4">
          Cela permet de rejoindre le projet dès le départ et de développer rapidement sa clientèle.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CoachLaunchOffer;
