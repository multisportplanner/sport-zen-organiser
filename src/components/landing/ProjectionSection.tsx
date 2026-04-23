import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTA_MICRO_REASSURANCE, CTA_SUBTEXT, PRIMARY_CTA_LABEL, scrollToConversionSection } from "@/lib/cta";

const timeline = [
  { day: "Dimanche", text: "Tu nous dis quand tu es dispo" },
  { day: "Lundi", text: "Tu reçois un message : \"Squash jeudi 19h, c'est calé\"" },
  { day: "Mercredi", text: "Tu reçois un rappel pour ne pas lâcher" },
  { day: "Jeudi soir", text: "Tu arrives. 1h après, tu repars, tu t'es dépensé et tu n'as rien organisé." },
  { day: "Et la semaine suivante", text: "Ça recommence, avec une nouvelle activité ou la même si tu préfères." },
];

const ProjectionSection = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Dans la vraie vie, ça donne <span className="text-gradient">quoi ?</span>
          </h2>

          <div className="space-y-6 mb-10">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-auto min-w-[120px] flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{t.day}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground font-medium">{t.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="cta" size="lg" className="h-14 px-10 text-lg" onClick={scrollToConversionSection}>
              {PRIMARY_CTA_LABEL}
            </Button>
            <p className="text-xs text-muted-foreground/70 mt-3">
              {CTA_SUBTEXT}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">{CTA_MICRO_REASSURANCE}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectionSection;
