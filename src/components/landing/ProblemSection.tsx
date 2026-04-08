import { motion } from "framer-motion";
import { Brain, CalendarDays, UserX, Users } from "lucide-react";

const pain = [
  { icon: Brain, text: "Tu y penses mais tu oublies" },
  { icon: CalendarDays, text: "Tu veux t'y mettre mais il faut organiser" },
  { icon: UserX, text: "Y aller seul ou motiver des amis" },
  { icon: Users, text: "Trouver un créneau qui convient à tout le monde" },
];

const ProblemSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pourquoi c'est si difficile de faire du sport{" "}
          <span className="text-gradient">régulièrement ?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
          {pain.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-card"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-hero-soft flex items-center justify-center flex-shrink-0">
                <p.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground text-left">{p.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="w-12 h-px bg-border mx-auto mb-6" />

        <p className="text-lg text-muted-foreground mb-4">
          Résultat : <strong className="text-foreground">tu repousses, tu laisses tomber.</strong>
        </p>

        <p className="text-sm font-medium text-primary">
          Pas par manque de motivation, mais à cause de l'organisation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
