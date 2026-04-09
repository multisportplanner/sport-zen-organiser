import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Settings, MessageSquare, Smile } from "lucide-react";

const steps = [
  { icon: CalendarDays, number: "1", title: "Tu dis quand tu es dispo", desc: "Semaine, week-end ou les deux. Matin, midi ou soir." },
  { icon: Settings, number: "2", title: "On s'occupe de tout", desc: "Un petit groupe près de chez toi, un créneau, un lieu. Tu n'as rien à gérer." },
  { icon: MessageSquare, number: "3", title: "Tu reçois ton rendez-vous", desc: "Un message simple avec toutes les infos." },
  { icon: Smile, number: "4", title: "Tu viens et tu profites", desc: "Pas d'organisation. Juste le plaisir de bouger." },
];

const HowItWorksSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="comment-ca-marche" className="py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Comment ça <span className="text-gradient">se passe ?</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero mx-auto mb-5 flex items-center justify-center shadow-glow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-3">{s.number}</div>
              <h3 className="text-lg font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToForm}>
            Rejoindre un groupe près de chez moi
          </Button>
          <p className="text-xs text-muted-foreground/70 mt-3">
            Tu nous dis quand tu es dispo • On organise tout
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
