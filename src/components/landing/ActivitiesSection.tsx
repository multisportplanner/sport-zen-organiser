import { motion } from "framer-motion";
import activitiesImg from "@/assets/activities-group.jpg";

const ActivitiesSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Chaque semaine, une activité{" "}
              <span className="text-gradient">différente</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Renforcement, mobilité, cardio, yoga, outdoor…
            </p>
            <p className="text-muted-foreground">
              Toujours encadré. Toujours accessible. Toujours en petit groupe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src={activitiesImg}
              alt="Groupe dynamique pratiquant différentes activités sportives"
              className="rounded-3xl shadow-card object-cover w-full aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
