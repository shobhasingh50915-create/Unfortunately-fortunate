import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";

const Game = () => {
  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      <ParticleField />

      {/* Top bar - matching homepage Navbar style */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-surface px-6 py-4 flex items-center justify-between z-20 shrink-0"
      >
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-widest text-primary text-glow-cyan"
        >
          CHRONO-RICKSHAW
        </Link>
        <span className="font-display text-xs tracking-[4px] text-foreground">
          NEO-MUMBAI
        </span>
        <Link
          to="/"
          className="font-display text-xs tracking-[3px] px-6 py-2 rounded neon-border-cyan bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
        >
          ← BACK TO HQ
        </Link>
      </motion.nav>

      {/* Game iframe */}
      <div className="flex-1 relative z-10">
        <iframe
          src="/game.html"
          title="Chrono-Rickshaw Game"
          className="w-full h-full border-none"
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default Game;
