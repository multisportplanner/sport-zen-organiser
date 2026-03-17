import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, GraduationCap } from "lucide-react";

const conditions = [
  { icon: ShieldCheck, text: "Disposer d'un statut légal" },
  { icon: FileCheck, text: "Avoir une assurance responsabilité civile professionnelle" },
  { icon: GraduationCap, text: "Avoir un diplôme d'État permettant d'encadrer une activité sportive" },
];

const CoachConditions = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Conditions pour{" "}
          <span className="text-gradient">rejoindre MSP</span>
        </h2>

        <div className="space-y-4 mb-8">
          {conditions.map((c, i) => (
            <motion.div
              key={c.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card rounded-xl px-6 py-4 shadow-card text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">{c.text}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Chaque profil est étudié pour garantir des séances sérieuses, encadrées et conformes.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CoachConditions;
