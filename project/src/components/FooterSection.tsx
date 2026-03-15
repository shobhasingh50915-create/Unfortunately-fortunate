const FooterSection = () => {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-display text-sm tracking-[4px] text-primary text-glow-cyan mb-1">
            CHRONO-RICKSHAW
          </div>
          <div className="font-body text-[10px] tracking-[2px] text-muted-foreground">
            NEO-MUMBAI · 2026
          </div>
        </div>

        <div className="font-body text-[10px] tracking-[2px] text-muted-foreground text-center">
          BUILT BY TEAM CHRONO · SHOBHAKUMARI · ANANYA · ANUSHKA
        </div>

        <div className="flex gap-4">
          {["⚡", "🛺", "🌃"].map((icon, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded glass-surface flex items-center justify-center text-sm hover:border-primary/30 transition-all cursor-default"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
