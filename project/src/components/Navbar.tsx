import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "FEATURES", href: "/#features" },
  { label: "EVOLUTION", href: "/#evolution" },
  { label: "CREW", href: "/#crew" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold tracking-widest text-primary text-glow-cyan">
          CHRONO-RICKSHAW
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.href.includes("#")) {
                  scrollTo(item.href.replace("/#", ""));
                }
              }}
              className="font-body text-xs tracking-[3px] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/play"
            className="font-display text-xs tracking-[3px] px-6 py-2 rounded neon-border-cyan bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
          >
            ▶ PLAY NOW
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-surface border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.href.includes("#")) {
                      scrollTo(item.href.replace("/#", ""));
                    }
                  }}
                  className="font-body text-xs tracking-[3px] text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/play"
                onClick={() => setIsOpen(false)}
                className="font-display text-xs tracking-[3px] px-6 py-3 rounded neon-border-cyan bg-primary/10 text-primary text-center"
              >
                ▶ PLAY NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
