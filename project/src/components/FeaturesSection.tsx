import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const features = [
  {
    icon: "📯",
    name: "HORN BLAST",
    key: "SPACE",
    desc: "Scare nearby vehicles and animals out of your lane. Classic Mumbai solution.",
    color: "text-neon-amber",
    borderClass: "hover:border-accent/40",
    unlock: "FROM START",
  },
  {
    icon: "↯",
    name: "WEAVE",
    key: "Z",
    desc: "Rapid double lane-shift zigzag. Cuts through tight clusters.",
    color: "text-primary",
    borderClass: "hover:border-primary/40",
    unlock: "400m · KURLA",
  },
  {
    icon: "⚡",
    name: "TURBO",
    key: "X",
    desc: "Double speed burst for 3 seconds. Camera widens. Blast through gaps.",
    color: "text-secondary",
    borderClass: "hover:border-secondary/40",
    unlock: "900m · ANDHERI",
  },
  {
    icon: "👻",
    name: "GHOST MODE",
    key: "G",
    desc: "Temporary invincibility — obstacles pass right through you.",
    color: "text-foreground",
    borderClass: "hover:border-foreground/20",
    unlock: "2500m · DHARAVI",
  },
];

const obstacles = [
  { emoji: "🚗", label: "Cars" },
  { emoji: "🛵", label: "Bikes" },
  { emoji: "🚛", label: "Trucks" },
  { emoji: "🚌", label: "Buses" },
  { emoji: "🐕", label: "Dogs" },
  { emoji: "🐈", label: "Cats" },
  { emoji: "🐄", label: "Cows" },
  { emoji: "🚧", label: "Barricades" },
  { emoji: "🕳️", label: "Potholes" },
  { emoji: "🛺", label: "Autos" },
  { emoji: "🧑‍🍳", label: "Vendors" },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "rotateY(0deg) rotateX(0deg)" });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.05)` });
  }, []);

  const handleLeave = useCallback(() => {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg) scale(1)" });
  }, []);

  return (
    <div className="perspective-800" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div
        ref={ref}
        className={`preserve-3d transition-transform duration-300 ease-out ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[5px] text-muted-foreground">
            // SURVIVAL TOOLKIT
          </span>
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mt-4 text-primary text-glow-cyan"
            initial={{ rotateX: 30, opacity: 0 }}
            animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ABILITIES
          </motion.h2>
        </motion.div>

        {/* Ability cards with 3D tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <TiltCard className={`glass-surface rounded-lg p-6 transition-all duration-500 group cursor-default ${f.borderClass}`}>
                <motion.div
                  className="text-3xl mb-3"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
                >
                  {f.icon}
                </motion.div>
                <h3 className={`font-display text-sm tracking-[2px] ${f.color} mb-1`}>
                  {f.name}
                </h3>
                <div className="font-body text-[10px] tracking-[2px] text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-muted border border-border text-foreground/50">
                    {f.key}
                  </span>
                  <span>· {f.unlock}</span>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Obstacles grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <span className="font-body text-xs tracking-[5px] text-muted-foreground">
            // WHAT LURKS ON THE STREETS
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold mt-4 mb-8 text-secondary text-glow-magenta">
            OBSTACLES & HAZARDS
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {obstacles.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.2, rotateY: 15, z: 30 }}
                className="glass-surface rounded-lg px-4 py-3 flex flex-col items-center gap-1 min-w-[80px] cursor-default hover:border-secondary/30 transition-all preserve-3d"
              >
                <span className="text-2xl">{o.emoji}</span>
                <span className="font-body text-[10px] tracking-[1px] text-muted-foreground">
                  {o.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
