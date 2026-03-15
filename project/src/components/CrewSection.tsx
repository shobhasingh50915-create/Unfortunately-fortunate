import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const crew = [
  {
    name: "SHOBHAKUMARI SINGH",
    role: "TEAM LEAD · ARCHITECT",
    desc: "Visionary lead driving the project from concept to reality. Orchestrates the entire Neo-Mumbai experience.",
    gradient: "from-primary to-secondary",
    glow: "shadow-[0_0_30px_hsl(186_100%_50%/0.3)]",
    isLead: true,
  },
  {
    name: "ANANYA SHETIYA",
    role: "DEVELOPER · ENGINE",
    desc: "Core game engine architect. Responsible for the 3D rendering pipeline and physics simulation.",
    gradient: "from-secondary to-neon-amber",
    glow: "shadow-[0_0_20px_hsl(295_100%_45%/0.2)]",
    isLead: false,
  },
  {
    name: "ANUSHKA WAGHAYE",
    role: "DESIGNER · UX",
    desc: "Crafts the cyberpunk UI/UX and visual identity. Every glow, every transition, every pixel.",
    gradient: "from-neon-amber to-primary",
    glow: "shadow-[0_0_20px_hsl(38_92%_50%/0.2)]",
    isLead: false,
  },
];

const CrewCard = ({ member, index, isInView }: { member: typeof crew[0]; index: number; isInView: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "rotateY(0deg) rotateX(0deg)" });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `rotateY(${x * 25}deg) rotateX(${-y * 25}deg) scale(1.05)` });
  }, []);

  const handleLeave = useCallback(() => {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg) scale(1)" });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -30 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="perspective-800"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={ref}
        className={`preserve-3d transition-all duration-300 ease-out glass-surface rounded-xl p-8 text-center group ${member.glow} ${
          member.isLead ? "ring-1 ring-primary/20" : ""
        }`}
        style={style}
      >
        {/* Avatar with 3D rotation */}
        <div className="relative w-24 h-24 mx-auto mb-6 preserve-3d">
          <motion.div
            className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-primary-foreground">
              {member.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          {/* Pulse ring on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-pulse-ring" />
            <div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
          </div>
          {/* Glitch lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-primary/40 animate-glitch" />
            <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-secondary/40 animate-glitch" style={{ animationDelay: "0.1s" }} />
          </div>
        </div>

        {member.isLead && (
          <motion.span
            className="inline-block font-body text-[9px] tracking-[3px] text-neon-amber bg-neon-amber/10 px-3 py-1 rounded mb-3 border border-neon-amber/20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ★ TEAM LEAD
          </motion.span>
        )}

        <h3 className="font-display text-sm tracking-[2px] text-foreground mb-1">
          {member.name}
        </h3>
        <p className="font-body text-[10px] tracking-[2px] text-muted-foreground mb-4">
          {member.role}
        </p>
        <p className="font-body text-xs text-muted-foreground leading-relaxed">
          {member.desc}
        </p>
      </div>
    </motion.div>
  );
};

const CrewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="crew" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[5px] text-muted-foreground">
            // PILOT PROFILES
          </span>
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mt-4 text-primary text-glow-cyan"
            initial={{ rotateX: 30, opacity: 0 }}
            animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE CREW
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {crew.map((member, i) => (
            <CrewCard key={member.name} member={member} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrewSection;
