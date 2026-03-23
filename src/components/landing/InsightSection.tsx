import { motion } from "framer-motion";
import { BarChart3, UserX } from "lucide-react";

const InsightSection = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-lg text-muted-foreground mb-10">
          Aujourd'hui, beaucoup de personnes aimeraient bouger plus…
          <br />
          mais dans la réalité, <strong className="text-foreground">ce n'est pas si simple.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-card rounded-2xl px-6 py-5 shadow-card flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground text-left">
              <strong className="text-2xl text-primary">65%</strong>
              <br />
              ne respectent pas les recommandations d'activité physique
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-card rounded-2xl px-6 py-5 shadow-card flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
              <UserX className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground text-left">
              <strong className="text-2xl text-primary">1 sur 2</strong>
              <br />
              abandonne rapidement
            </p>
          </motion.div>
        </div>

        <p className="text-muted-foreground mb-2">
          Pas par manque de motivation.
          <br />
          Mais parce que c'est difficile à organiser… <strong className="text-foreground">seul.</strong>
        </p>

        <p className="text-lg font-semibold text-primary mt-6">
          Et si c'était plus simple à plusieurs ?
        </p>
      </motion.div>
    </div>
  </section>
);

export default InsightSection;
