import { motion } from "framer-motion";

const CoachProblem = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Trouver des clients prend{" "}
          <span className="text-gradient">du temps</span>
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>Aujourd'hui, beaucoup de coachs passent une grande partie de leur temps à :</p>

          <ul className="text-left max-w-md mx-auto space-y-2">
            <li>— chercher de nouveaux clients</li>
            <li>— être visibles sur les réseaux sociaux</li>
            <li>— remplir leurs créneaux disponibles</li>
            <li>— gérer les réservations</li>
          </ul>

          <div className="w-12 h-px bg-border mx-auto" />

          <p>
            Tout ce temps pourrait être consacré à ce que vous aimez vraiment faire :
            <br />
            <strong className="text-foreground">coacher.</strong>
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CoachProblem;
