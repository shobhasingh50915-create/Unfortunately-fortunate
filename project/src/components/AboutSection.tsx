import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const TiltCard3D = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "rotateY(0deg) rotateX(0deg)" });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateZ(20px)` });
  }, []);

  const handleLeave = useCallback(() => {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg) translateZ(0px)" });
  }, []);

  return (
    <div className="perspective-800" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div ref={ref} className={`preserve-3d transition-transform duration-300 ease-out ${className}`} style={style}>
        {children}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[5px] text-muted-foreground">
            // MISSION BRIEF
          </span>
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6 text-primary text-glow-cyan"
            initial={{ rotateX: 30, opacity: 0 }}
            animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE ODYSSEY
          </motion.h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mumbai, 2026. The streets have evolved into a living organism — unpredictable,
            relentless, and beautiful in its chaos. Your autorickshaw is your lifeline.
            Navigate through ever-changing zones, dodge obstacles that range from street dogs
            to massive trucks, and collect rewards to survive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚧",
              title: "ENDLESS ROAD",
              desc: "No two runs are the same. The city generates new situations continuously — the road never repeats.",
            },
            {
              icon: "⚡",
              title: "EVOLVING CITY",
              desc: "From calm streets to heavy chaos. Rain, fog, and night cycles transform the world around you.",
            },
            {
              icon: "🛺",
              title: "SURVIVAL SKILLS",
              desc: "Unlock horn blast, weave, turbo boost, and ghost mode as you push deeper into Neo-Mumbai.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <TiltCard3D className="glass-surface rounded-lg p-8 hover:border-primary/30 transition-all duration-500 group h-full">
                <motion.div
                  className="text-3xl mb-4"
                  animate={{ y: [-3, 3, -3], rotateZ: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-display text-sm tracking-[3px] text-primary mb-3 group-hover:text-glow-cyan transition-all">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
