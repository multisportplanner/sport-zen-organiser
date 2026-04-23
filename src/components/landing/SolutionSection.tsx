import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { CTA_MICRO_REASSURANCE, CTA_SUBTEXT, PRIMARY_CTA_LABEL, WHATSAPP_URL } from "@/lib/cta";

const reasons = [
  "Tu veux faire du sport sans te prendre la tête",
  "Tu préfères bouger en petit groupe ou simplement avec tes amis",
  "Tu veux une activité près de chez toi",
  "Tu veux que ce soit simple et régulier",
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            MSP est fait pour toi <span className="text-gradient">si…</span>
          </h2>

          <div className="space-y-5 mb-10">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 bg-card rounded-xl px-5 py-4 shadow-card"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">{r}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild variant="cta" size="lg" className="h-14 px-10 text-lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PRIMARY_CTA_LABEL}</a>
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

export default SolutionSection;
