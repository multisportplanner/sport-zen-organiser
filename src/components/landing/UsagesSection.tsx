import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Sun, Check } from "lucide-react";

const UsagesSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            2 façons d'utiliser <span className="text-gradient">MSP</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {/* Bloc 1 - Régulier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-card flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
              <CalendarCheck className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tu veux t'y mettre régulièrement</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Chaque semaine, un créneau est organisé pour toi, avec un petit groupe.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {[
                "Un rendez-vous simple à intégrer dans ton quotidien",
                "Un groupe à taille humaine",
                "Une pratique régulière sans pression",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="sm" className="w-full" onClick={scrollToForm}>
              Je me lance simplement
            </Button>
          </motion.div>

          {/* Bloc 2 - Ponctuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-card flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
              <Sun className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tu veux te faire plaisir quand tu en as envie</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Le week-end ou pendant les vacances, MSP organise des activités outdoor simples à rejoindre.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {[
                "Idéal pour le week-end ou les vacances",
                "Activités ponctuelles faciles à rejoindre",
                "Simple, fluide, déjà organisé",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="sm" className="w-full" onClick={scrollToForm}>
              Je rejoins une sortie
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsagesSection;
