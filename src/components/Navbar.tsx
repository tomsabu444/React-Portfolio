import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Home, User, Briefcase, Code2, Mail } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "timeline-skills", label: "Skills & Exp", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 border-2 border-foreground bg-background/95 backdrop-blur-md px-4 py-2 sm:px-6 ${
          isScrolled
            ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl py-2"
            : "shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-2xl py-2.5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
            aria-label="Tom Sabu Portfolio Home"
          >
            <div className="border-2 border-foreground bg-foreground px-2.5 py-0.5 font-heading text-lg sm:text-xl text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-3 group-hover:scale-105 transition-transform">
              TOM SABU.
            </div>
            <span className="hidden sm:inline-block font-tertiary text-[10px] font-bold tracking-widest text-foreground/75 uppercase border border-foreground px-1.5 py-0.5 bg-background shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              V3.0
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 font-tertiary text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer rounded-lg border-2 ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1"
                      : "border-transparent text-foreground/80 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button (Desktop) */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 border-2 border-foreground bg-background px-3.5 py-1.5 font-tertiary text-xs font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-all rotate-1 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="md:hidden border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-6xl mt-2 md:hidden border-2 border-foreground bg-background p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 font-tertiary text-sm font-bold uppercase tracking-wider text-left transition-all rounded-lg border-2 ${
                      isActive
                        ? "border-foreground bg-foreground text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        : "border-transparent text-foreground hover:border-foreground/30 hover:bg-foreground/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-2 border-t-2 border-foreground/10 mt-1 flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center justify-center gap-2 w-full border-2 border-foreground bg-foreground px-4 py-2.5 font-tertiary text-xs font-bold uppercase tracking-wider text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-all cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
