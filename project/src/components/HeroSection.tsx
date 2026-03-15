import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-rickshaw.jpg";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Neo-Mumbai cyberpunk cityscape with auto-rickshaw"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern z-[1]" />

      {/* Scan line effect */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>

      {/* 3D Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="font-body text-xs tracking-[6px] text-muted-foreground uppercase">
            // NEO-MUMBAI · 2026
          </span>
        </motion.div>

        {/* 3D perspective title */}
        <motion.div
          initial={{ opacity: 0, rotateX: 40, y: 60 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="preserve-3d"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-2"
            whileHover={{ rotateY: 5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-primary text-glow-cyan">CHRONO</span>
            <br />
            <span className="text-foreground">RICKSHAW</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-sm md:text-base tracking-[4px] text-secondary mb-2 text-glow-magenta"
        >
          NEO-MUMBAI
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Dodge the Chaos. Master the Evolution. Survive the Streets of Tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center preserve-3d"
        >
          <motion.div whileHover={{ scale: 1.08, rotateY: -5, z: 20 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/play"
              className="inline-block font-display text-sm tracking-[4px] px-10 py-4 rounded gradient-cyber text-primary-foreground font-bold transition-transform duration-300 shadow-[0_0_30px_hsl(186_100%_50%/0.3)]"
            >
              ▶ START ENGINE
            </Link>
          </motion.div>
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display text-xs tracking-[3px] px-8 py-4 rounded neon-border-cyan text-primary hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE ↓
          </motion.button>
        </motion.div>

        {/* HUD-style stats with 3D float */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex justify-center gap-8 md:gap-16 perspective-800"
        >
          {[
            { label: "ZONES", value: "6+", delay: 0 },
            { label: "OBSTACLES", value: "11", delay: 0.15 },
            { label: "ABILITIES", value: "4", delay: 0.3 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center preserve-3d"
              whileHover={{ rotateY: 15, scale: 1.1, z: 30 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan"
                animate={{ rotateX: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: stat.delay }}
              >
                {stat.value}
              </motion.div>
              <div className="font-body text-[10px] tracking-[3px] text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
