import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] translate-x-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          <span className="text-primary text-glow-cyan">READY</span>{" "}
          <span className="text-foreground">TO RIDE?</span>
        </h2>
        <p className="font-body text-muted-foreground mb-10 max-w-md mx-auto">
          The streets of Neo-Mumbai await. How far can you survive?
        </p>
        <Link
          to="/play"
          className="inline-block font-display text-base tracking-[5px] px-14 py-5 rounded gradient-cyber text-primary-foreground font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_hsl(186_100%_50%/0.3)]"
        >
          ▶ LAUNCH GAME
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
