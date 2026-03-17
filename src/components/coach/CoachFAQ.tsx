import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "L'inscription est-elle gratuite ?", a: "Oui. Vous êtes rémunéré uniquement lorsque vous intervenez sur une séance." },
  { q: "Dois-je trouver moi-même les participants ?", a: "Non. MSP constitue les groupes et organise les séances." },
  { q: "Puis-je choisir mes disponibilités ?", a: "Oui. Vous indiquez vos créneaux et vos zones d'intervention." },
  { q: "Dois-je être diplômé ?", a: "Oui. Un diplôme d'État est obligatoire pour pouvoir rejoindre MSP comme coach partenaire." },
  { q: "Dois-je avoir un statut légal et une assurance ?", a: "Oui. Un statut légal et une assurance responsabilité civile professionnelle sont nécessaires pour intervenir." },
];

const CoachFAQ = () => (
  <section className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Questions{" "}
          <span className="text-gradient">fréquentes</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl px-6 shadow-card border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default CoachFAQ;
