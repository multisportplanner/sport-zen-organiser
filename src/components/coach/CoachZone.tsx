import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CoachZone = () => (
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
          <MapPin className="w-7 h-7 text-primary-foreground" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Zone de{" "}
          <span className="text-gradient">lancement</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          MSP démarre entre <strong className="text-foreground">Nice, Antibes et Sophia Antipolis</strong>.
        </p>
        <p className="text-muted-foreground mt-4">
          Notre objectif est de créer une communauté sportive locale simple et accessible.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CoachZone;
