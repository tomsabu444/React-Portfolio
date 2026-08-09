import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, User, Briefcase, Wrench, Code2, Mail } from "lucide-react";
import { logSectionView } from "@/services/firebase";

const ease = [0.22, 1, 0.36, 1] as const;

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

function AnimatedNavLabel({ label, isHovered }: { label: string; isHovered?: boolean }) {
  const chars = label.split("");

  return (
    <span className="inline-flex items-center overflow-hidden h-[1.1em] uppercase leading-none">
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ height: "1.1em" }}
        >
          <span
            className="flex flex-col"
            style={{
              transitionProperty: "transform",
              transitionDuration: isHovered ? "500ms" : "300ms",
              transitionDelay: isHovered ? `${25 * i}ms` : "0ms",
              transform: isHovered ? "translateY(-50%)" : "translateY(0%)",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <span className="block" style={{ height: "1.1em", lineHeight: "1.1em" }}>
              {char === " " ? "\u00A0" : char}
            </span>
            <span className="block" style={{ height: "1.1em", lineHeight: "1.1em" }} aria-hidden>
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}

function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center gap-1.5 px-3 py-1.5 font-tertiary text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer rounded-lg border-2 ${
        isActive
          ? "border-foreground bg-foreground text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1"
          : "border-transparent text-foreground/80 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5"
      }`}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <AnimatedNavLabel label={item.label} isHovered={isHovered || isActive} />
    </button>
  );
}

function LiquidMenuButton({
  label,
  icon: Icon,
  onClick,
  isOpen,
  index,
  isActive,
}: {
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  isOpen: boolean;
  index: number;
  isActive: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const animatingRef = useRef(false);
  const pendingLeaveRef = useRef(false);
  const chars = label.split("");
  const lockDuration = 30 * chars.length + 300;

  const handleEnter = useCallback(() => {
    pendingLeaveRef.current = false;
    if (hovered) return;
    setHovered(true);
    animatingRef.current = true;
    setTimeout(() => {
      animatingRef.current = false;
      if (pendingLeaveRef.current) {
        pendingLeaveRef.current = false;
        setHovered(false);
      }
    }, lockDuration);
  }, [hovered, lockDuration]);

  const handleLeave = useCallback(() => {
    if (animatingRef.current) {
      pendingLeaveRef.current = true;
    } else {
      setHovered(false);
    }
  }, []);

  const isHoverState = hovered || isActive;

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative flex items-center justify-center gap-2 text text-lg font-bold uppercase leading-none overflow-hidden py-2 px-4 rounded-xl border-2 transition-all cursor-pointer w-full ${
        isActive
          ? "border-background bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)]"
          : "border-background/20 text-background hover:border-background hover:bg-background/10"
      }`}
      style={{
        fontFamily: "var(--font-tertiary), sans-serif",
        letterSpacing: "-0.01em",
        height: "2.4em",
      }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
      transition={{
        duration: 0.4,
        delay: isOpen ? 0.25 + 0.06 * index : 0,
        ease,
      }}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <div className="flex justify-center overflow-hidden" style={{ height: "1em" }}>
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ height: "1em" }}
          >
            <span
              className="flex flex-col"
              style={{
                transitionProperty: "transform",
                transitionDuration: isHoverState ? "600ms" : "300ms",
                transitionDelay: isHoverState ? `${30 * i}ms` : "0ms",
                transform: isHoverState ? "translateY(-50%)" : "translateY(0%)",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span
                className="block"
                style={{ height: "1em", lineHeight: "1em" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
              <span
                className="block"
                style={{ height: "1em", lineHeight: "1em" }}
                aria-hidden
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    // Track which section IDs are already being observed to avoid duplicates
    const observedIds = new Set<string>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          logSectionView(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe any section element that is already in the DOM
    const tryObserve = () => {
      NAV_ITEMS.forEach((item) => {
        if (observedIds.has(item.id)) return;
        const el = document.getElementById(item.id);
        if (el) {
          observer.observe(el);
          observedIds.add(item.id);
        }
      });
    };

    // Initial pass — #home is in DOM immediately; lazy sections aren't yet
    tryObserve();

    // Watch for lazy sections being injected into the DOM
    const mutationObserver = new MutationObserver(() => {
      tryObserve();
      // Stop watching once all sections are observed
      if (observedIds.size === NAV_ITEMS.length) {
        mutationObserver.disconnect();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    logSectionView(id);
    window.dispatchEvent(new CustomEvent("load-section", { detail: { id } }));

    const doScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: Math.max(0, y),
          behavior: "smooth",
        });
      }
    };

    // Immediate scroll attempt + delayed scroll after drawer collapses
    requestAnimationFrame(doScroll);
    setTimeout(doScroll, 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-6xl transition-all duration-300 border-2 border-foreground bg-background px-4 py-2 sm:px-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
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
            <span className="inline-block font-tertiary text-[10px] font-bold tracking-widest text-foreground/80 uppercase border border-foreground px-1.5 py-0.5 bg-background shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              VOL. 3
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 ml-auto">
            {NAV_ITEMS.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              />
            ))}
          </nav>

          {/* Right Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Morphing Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="md:hidden border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors cursor-pointer relative w-10 h-10 flex items-center justify-center overflow-hidden"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.span
                  className="absolute block w-5 h-[2.5px] bg-current rounded-full"
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 0 : -3.5,
                  }}
                  transition={{ duration: 0.4, ease }}
                />
                <motion.span
                  className="absolute block w-5 h-[2.5px] bg-current rounded-full"
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? 0 : 3.5,
                  }}
                  transition={{ duration: 0.4, ease }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay with Liquid Morph Container & Expanding Dark Circle */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.94, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="relative mx-auto max-w-6xl mt-2 md:hidden overflow-hidden rounded-3xl border-4 border-foreground bg-background p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Expanding Dark Circle Background Layer */}
            <motion.div
              className="absolute left-1/2 bg-foreground pointer-events-none"
              style={{
                width: "250%",
                height: "250%",
                borderRadius: "50%",
                x: "-50%",
              }}
              initial={{ bottom: "-250%" }}
              animate={{ bottom: "-20%" }}
              exit={{ bottom: "-250%" }}
              transition={{
                duration: 0.35,
                ease,
              }}
            />

            {/* Menu Items Container */}
            <div className="relative z-10 flex flex-col gap-3 items-center justify-center py-2">
              {NAV_ITEMS.map((item, idx) => (
                <LiquidMenuButton
                  key={item.id}
                  label={item.label}
                  icon={item.icon}
                  isOpen={mobileMenuOpen}
                  index={idx}
                  isActive={activeSection === item.id}
                  onClick={() => scrollToSection(item.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
