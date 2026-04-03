import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ClipboardList, Settings, Smile } from "lucide-react";

const steps = [
  { icon: ClipboardList, number: "1", title: "Tu nous dis ce que tu aimes", desc: "Activités, créneaux, rythme" },
  { icon: Settings, number: "2", title: "MSP organise pour toi", desc: "On te propose un groupe adapté" },
  { icon: Smile, number: "3", title: "Tu rejoins et tu profites", desc: "Tu viens, tu bouges, sans te poser de questions" },
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
          Comment ça <span className="text-gradient">marche ?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
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
            Rejoindre un groupe
          </Button>
          <p className="text-xs text-muted-foreground/70 mt-3">
            Activité sportive • petit groupe • près de chez toi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
