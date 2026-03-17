import { motion } from "framer-motion";

const mainSports = [
  "Functional training",
  "Yoga",
  "Pilates",
  "Running",
  "Mobilité",
  "Renforcement musculaire",
  "Bootcamp outdoor",
];

const CoachSports = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sports recherchés{" "}
          <span className="text-gradient">pour le lancement</span>
        </h2>

        <p className="text-muted-foreground mb-10">
          Pour le lancement de MSP, nous recherchons des coachs capables d'animer des séances en petit groupe en extérieur.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {mainSports.map((sport) => (
            <span
              key={sport}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium shadow-card hover:shadow-card-hover transition-shadow"
            >
              {sport}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Autres activités possibles : toute activité outdoor adaptée à des petits groupes débutants ou intermédiaires.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CoachSports;
