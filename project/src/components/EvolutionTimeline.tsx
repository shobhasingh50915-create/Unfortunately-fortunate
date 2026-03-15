import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const zones = [
  {
    name: "DADAR JUNCTION",
    dist: "0m",
    desc: "Normal traffic. Learn the controls. The city greets you with relative calm.",
    mood: "bg-primary/10 border-primary/20",
    dotColor: "bg-primary",
  },
  {
    name: "KURLA CROSSING",
    dist: "400m",
    desc: "More vehicles. Weave unlocked. The first real test of your reflexes.",
    mood: "bg-primary/10 border-primary/20",
    dotColor: "bg-primary",
  },
  {
    name: "ANDHERI EXPRESS",
    dist: "900m",
    desc: "Speed climbs. Turbo unlocked. Rain begins. Visibility drops.",
    mood: "bg-secondary/10 border-secondary/20",
    dotColor: "bg-secondary",
  },
  {
    name: "BANDRA FLYOVER",
    dist: "1600m",
    desc: "Dense traffic. Fog thickens. Only the skilled survive this stretch.",
    mood: "bg-secondary/10 border-secondary/20",
    dotColor: "bg-secondary",
  },
  {
    name: "DHARAVI RUSH",
    dist: "2500m",
    desc: "Ghost mode unlocked. Pure chaos. The city fights back with everything.",
    mood: "bg-neon-amber/10 border-neon-amber/20",
    dotColor: "bg-neon-amber",
  },
  {
    name: "JUHU CHAOS",
    dist: "3500m",
    desc: "Maximum entropy. Near-zero visibility. Legend territory.",
    mood: "bg-destructive/10 border-destructive/20",
    dotColor: "bg-destructive",
  },
];

const EvolutionTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="evolution" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[5px] text-muted-foreground">
            // CITY EVOLUTION
          </span>
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mt-4 text-primary text-glow-cyan"
            initial={{ rotateX: 30, opacity: 0 }}
            animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE ZONES
          </motion.h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            The city evolves with distance. Each zone brings new challenges,
            weather, and intensity. How far can you go?
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with glow */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-secondary/40 to-destructive/40"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {zones.map((zone, i) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, rotateY: i % 2 === 0 ? -15 : 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className={`relative flex items-start mb-8 ${
                i % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Animated dot */}
              <motion.div
                className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full ${zone.dotColor} -translate-x-1/2 mt-6 z-10`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.12 }}
                style={{ boxShadow: "0 0 15px currentColor, 0 0 30px currentColor" }}
              >
                <div className="absolute inset-[-6px] rounded-full border border-current opacity-30 animate-pulse-ring" />
              </motion.div>

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 ${
                  i % 2 === 0 ? "md:pr-12 md:w-1/2" : "md:pl-12 md:w-1/2 md:ml-auto"
                }`}
              >
                <motion.div
                  className={`glass-surface rounded-lg p-6 ${zone.mood} transition-all duration-500`}
                  whileHover={{ scale: 1.04, rotateY: i % 2 === 0 ? 5 : -5, z: 20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 justify-between mb-2">
                    <h3 className="font-display text-xs tracking-[3px] text-foreground">
                      {zone.name}
                    </h3>
                    <motion.span
                      className="font-body text-[10px] tracking-[2px] text-muted-foreground bg-muted px-2 py-0.5 rounded"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {zone.dist}
                    </motion.span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {zone.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvolutionTimeline;
