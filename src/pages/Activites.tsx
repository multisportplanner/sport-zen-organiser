import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mountain, Waves, Bike, Anchor, TreePine, MapPin, Clock, Users } from "lucide-react";
import { CTA_MICRO_REASSURANCE, CTA_SUBTEXT, PRIMARY_CTA_LABEL, WHATSAPP_URL } from "@/lib/cta";

const activities = [
  {
    icon: Mountain,
    title: "Canyoning",
    description: "Descente de canyon encadrée avec rappels, toboggans naturels et sauts dans des vasques d'eau turquoise",
    encadrement: "Moniteur diplômé",
    lieu: "Arrière-pays niçois",
    duree: "Demi-journée",
  },
  {
    icon: Waves,
    title: "Kayak guidé",
    description: "Balade en kayak le long du littoral avec découverte de criques et grottes marines",
    encadrement: "Guide local certifié",
    lieu: "Côte d'Azur",
    duree: "2h à 3h",
  },
  {
    icon: Bike,
    title: "VTT électrique",
    description: "Randonnée en VTT électrique sur les sentiers de l'arrière-pays avec vue panoramique",
    encadrement: "Moniteur VTT",
    lieu: "Alpes-Maritimes",
    duree: "Demi-journée",
  },
  {
    icon: Anchor,
    title: "Plongée sous-marine",
    description: "Baptême ou exploration encadrée des fonds marins méditerranéens",
    encadrement: "Moniteur PADI / FFESSM",
    lieu: "Nice, Antibes, Cannes",
    duree: "2h à 3h",
  },
  {
    icon: TreePine,
    title: "Rafting",
    description: "Descente en rafting sur les rivières des Alpes du Sud, accessible à tous les niveaux",
    encadrement: "Guide professionnel",
    lieu: "Vallée du Var, Verdon",
    duree: "Demi-journée",
  },
];

const Activites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Que faire sur la <span className="text-gradient">Côte d'Azur ?</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Voici quelques idées d'activités sportives à vivre, simples à réserver et encadrées
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cards */}
        <section className="pb-32">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {activities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-card rounded-2xl p-6 shadow-card flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero-soft flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{a.description}</p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      <span>{a.encadrement}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{a.lieu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{a.duree}</span>
                    </div>
                  </div>

                  <Button asChild variant="cta" size="sm" className="w-full">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PRIMARY_CTA_LABEL}</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="activites-contact" className="py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Envie de <span className="text-gradient">réserver ?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Dis-nous quelle activité t'intéresse et on s'occupe de tout.
              </p>
              <Button asChild variant="cta" size="lg" className="h-14 px-10 text-lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PRIMARY_CTA_LABEL}</a>
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">
                {CTA_SUBTEXT}
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">{CTA_MICRO_REASSURANCE}</p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Activites;
