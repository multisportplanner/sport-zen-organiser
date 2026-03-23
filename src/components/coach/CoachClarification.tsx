import { motion } from "framer-motion";

const CoachClarification = () => (
  <section className="py-16">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">MSP ne forme pas de coachs.</strong>
            <br />
            Nous collaborons avec des coachs déjà qualifiés pour animer des séances sportives.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CoachClarification;
