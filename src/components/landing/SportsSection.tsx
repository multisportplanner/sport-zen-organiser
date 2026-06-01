import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dumbbell, Heart, Activity, Flame, Sparkles, Footprints, Mountain, Waves, TreePine, Compass, Cable } from "lucide-react";
import mspOrganiseImg from "@/assets/msp-organise.png";

const regulieres = [
  { icon: Dumbbell, label: "Renforcement" },
  { icon: Activity, label: "Mobilité" },
  { icon: Flame, label: "Cross-training" },
  { icon: Heart, label: "Cardio" },
  { icon: Sparkles, label: "Stretching" },
  { icon: Footprints, label: "Reprise / sport santé" },
];

const ponctuelles = [
  { icon: Footprints, label: "Randonnée" },
  { icon: Mountain, label: "Canyoning", href: "/activites/canyoning", ariaLabel: "Découvrir la page Canyoning" },
  { icon: Cable, label: "Via ferrata", href: "/activites/via-ferrata", ariaLabel: "Découvrir la page Via Ferrata" },
  { icon: Waves, label: "Rafting", href: "/activites/rafting", ariaLabel: "Découvrir la page Rafting" },
  { icon: Waves, label: "Kayak", href: "/activites/kayak", ariaLabel: "Découvrir la page Kayak" },
  { icon: TreePine, label: "Escalade", href: "/activites/escalade", ariaLabel: "Découvrir la page Escalade" },
  { icon: Compass, label: "Paddle", href: "/activites/paddle", ariaLabel: "Découvrir la page Paddle" },
];

const CardContent = ({ icon: Icon, label }: { icon: typeof Footprints; label: string }) => (
  <>
    <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <p className="font-semibold text-sm">{label}</p>
  </>
);

const SportsSection = () => (
  <section id="activites" className="py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Des activités selon <span className="text-gradient">tes envies</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Du renforcement au outdoor, on s'occupe de tout pour toi
        </p>
      </motion.div>

      {/* Illustration de projection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto mt-12 mb-4 px-4"
      >
        <img
          src={mspOrganiseImg}
          alt="MSP organise pour toi, tu n'as rien à gérer"
          loading="lazy"
          width={1600}
          height={800}
          className="w-full h-auto"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mt-16">
        {/* Régulières */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-lg font-bold text-center">Activités régulières</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {regulieres.map((s, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 shadow-card text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-hero-soft flex items-center justify-center mx-auto mb-2">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ponctuelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <h3 className="text-lg font-bold text-center">Activités ponctuelles</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ponctuelles.map((s, i) =>
              s.href ? (
                <Link
                  key={i}
                  to={s.href}
                  aria-label={s.ariaLabel}
                  className="bg-card rounded-2xl p-5 shadow-card text-center cursor-pointer transition-shadow hover:shadow-lg"
                >
                  <CardContent icon={s.icon} label={s.label} />
                </Link>
              ) : (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-5 shadow-card text-center"
                >
                  <CardContent icon={s.icon} label={s.label} />
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SportsSection;
