import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Compass, Check } from "lucide-react";

const UsagesSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToActivites = () => {
    document.getElementById("activites")?.scrollIntoView({ behavior: "smooth" });
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
            Deux façons d'utiliser <span className="text-gradient">MSP</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Toujours avec la même idée : faire une activité sportive sans avoir à tout organiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {/* Card 1 – Régulier */}
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
              Tu aimerais bouger plus souvent, mais entre le quotidien et l'organisation, ce n'est pas toujours simple.
              MSP t'aide à pratiquer une activité sportive de manière régulière, simplement.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {[
                "Une activité chaque semaine ou à ton rythme",
                "Petit groupe convivial",
                "Sans objectif de performance",
                "Juste le plaisir de bouger",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="sm" className="w-full" onClick={scrollToForm}>
              Rejoindre les premiers groupes
            </Button>
          </motion.div>

          {/* Card 2 – Ponctuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-card flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
              <Compass className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tu veux faire une activité sans te prendre la tête</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Tu cherches une idée pour bouger, découvrir ou simplement te faire plaisir, en semaine, le week-end ou pendant les vacances ?
              MSP sélectionne pour toi des activités sportives simples à réserver sur la Côte d'Azur.
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {[
                "Activités outdoor ou bien-être",
                "Pour locaux et visiteurs",
                "Créneaux flexibles",
                "Réservation simplifiée",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="sm" className="w-full" onClick={scrollToActivites}>
              Voir les idées d'activités
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsagesSection;
