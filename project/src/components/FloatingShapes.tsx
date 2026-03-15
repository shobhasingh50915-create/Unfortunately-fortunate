import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      {/* Orbiting ring */}
      <div className="absolute top-1/4 right-[15%] w-32 h-32 animate-orbit opacity-30">
        <div className="w-6 h-6 rounded-full bg-primary/40 shadow-[0_0_20px_hsl(186_100%_50%/0.5)]" />
      </div>

      {/* 3D floating cube wireframe */}
      <div className="absolute top-[20%] left-[10%] perspective-800">
        <div className="w-16 h-16 animate-spin-slow preserve-3d">
          <div className="absolute inset-0 border border-primary/20 rounded-sm" />
          <div className="absolute inset-0 border border-secondary/15 rounded-sm" style={{ transform: "rotateY(90deg)" }} />
          <div className="absolute inset-0 border border-neon-amber/10 rounded-sm" style={{ transform: "rotateX(90deg)" }} />
        </div>
      </div>

      {/* Morphing blob */}
      <div className="absolute bottom-[25%] right-[8%]">
        <div className="w-24 h-24 bg-secondary/10 animate-morph blur-sm" />
      </div>

      {/* Floating diamond */}
      <motion.div
        className="absolute top-[60%] left-[5%]"
        animate={{ y: [-10, 10, -10], rotateZ: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-8 border border-neon-amber/30 rotate-45 shadow-[0_0_15px_hsl(38_92%_50%/0.2)]" />
      </motion.div>

      {/* Pulse rings */}
      <div className="absolute top-[40%] right-[25%]">
        <div className="w-4 h-4 rounded-full bg-primary/30 relative">
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-ring" />
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-ring" style={{ animationDelay: "0.7s" }} />
        </div>
      </div>

      {/* Floating hexagon */}
      <motion.div
        className="absolute bottom-[15%] left-[20%]"
        animate={{ y: [-15, 5, -15], rotate: [0, 60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-20">
          <polygon
            points="20,2 37,11 37,29 20,38 3,29 3,11"
            fill="none"
            stroke="hsl(295 100% 45%)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Small floating dots */}
      {[
        { top: "15%", left: "45%", delay: 0, color: "bg-primary/30" },
        { top: "70%", left: "75%", delay: 1.5, color: "bg-secondary/30" },
        { top: "80%", left: "40%", delay: 3, color: "bg-neon-amber/30" },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${dot.color}`}
          style={{ top: dot.top, left: dot.left }}
          animate={{ y: [-8, 8, -8], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: dot.delay }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
