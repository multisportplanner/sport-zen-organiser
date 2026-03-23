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
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Sports{" "}
          <span className="text-gradient">recherchés</span>
        </h2>

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
          Liste non exhaustive — nous sommes ouverts à d'autres disciplines.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CoachSports;
