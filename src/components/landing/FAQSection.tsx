import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "MSP est-il accessible aux débutants ?", a: "Oui, toutes les activités sont conçues pour être accessibles. Pas besoin d'un niveau particulier." },
  { q: "C'est pour une pratique régulière ou ponctuelle ?", a: "Les deux ! Tu peux t'inscrire pour bouger chaque semaine ou simplement quand tu en as envie." },
  { q: "Il y a des activités en semaine et le week-end ?", a: "Oui, MSP propose des créneaux en semaine comme le week-end, selon tes disponibilités." },
  { q: "Les activités sont uniquement en outdoor ?", a: "Non, MSP propose des activités variées : outdoor, bien-être, renforcement… en intérieur comme en extérieur." },
];

const FAQSection = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Questions <span className="text-gradient">fréquentes</span>
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-card border-none px-5">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
