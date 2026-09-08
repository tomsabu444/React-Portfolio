import { motion } from "motion/react";
import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import RadioTowerIcon from "@iconify-react/mdi/radio-tower";
import { TryHackMeIcon } from "../components/icons/TryHackMeIcon";
import { MorphingText } from "../components/ui/morphing-text";
import tom_sabu from "../assets/tom_sabu.webp";
import { logSocialClick } from "@/services/firebase";

function HomePage() {
  const currentYear = new Date().getFullYear().toString();
  const githubUrl = "https://github.com/tomsabu444";
  const linkedinUrl = "https://www.linkedin.com/in/tomsabu444";
  const tryhackmeUrl = "https://tryhackme.com/p/tomsabu444";

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(80dvh)] lg:min-h-screen w-full flex-col justify-center px-4 py-4 sm:py-8 lg:py-12 text-foreground sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Pop-Art Comic Year Display Badge */}
      <motion.div
        className="absolute right-4 top-3 sm:top-6 z-20 flex flex-col items-end sm:right-8 lg:right-12 cursor-pointer"
        whileHover={{ scale: 1.08, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative border-2 border-foreground bg-foreground px-2 py-0.5 sm:px-2.5 sm:py-1 font-heading text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-6 text-center flex flex-col items-center leading-none">
          <span className="font-tertiary text-[10px] sm:text-xs font-black uppercase tracking-wider text-white select-none">
            VOL. 3
          </span>
          <span className="text-base sm:text-2xl tracking-wide text-background">
            {currentYear}
          </span>
        </div>
      </motion.div>

      {/* ==================== MOBILE LAYOUT (< lg) ==================== */}
      <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4 lg:hidden my-auto pt-1">
        {/* Mobile Top: Status / Clearance Badge aligned to LEFT */}
        <motion.div
          className="w-full flex justify-start z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-3.5 py-1.5 font-tertiary text-sm sm:text-base font-bold uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <RadioTowerIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            PORTFOLIO
          </div>
        </motion.div>

        {/* Mobile: Centered Image Container with Background Stroke Text & Absolute Socials/Location Overlay */}
        <div className="relative flex items-center justify-center w-full min-h-70 xs:min-h-[320px] my-1">
          {/* Solid Foreground Text Layer passing behind the image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span className="font-heading text-[18vw] sm:text-[14vw] uppercase text-foreground opacity-30 whitespace-nowrap tracking-widest scale-110 -translate-y-14 sm:-translate-y-16">
              TOM SABU
            </span>
          </div>

          {/* Centered Cutout Image */}
          <motion.div
            className="relative z-10 w-[70vw] max-w-65 xs:max-w-[300px] sm:w-64 shrink-0 flex justify-center pb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <img
              src={tom_sabu}
              alt="Tom Sabu"
              width={550}
              height={689}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)]"
            />
          </motion.div>

          {/* Absolute Overlay: Social Icons (Left) & Location Info (Right) */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20 flex flex-row items-end justify-between w-full px-1 pointer-events-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {/* Social Icons in separate rows on Left */}
            <div className="flex flex-col gap-2 max-[425px]:absolute max-[425px]:-bottom-26 max-[425px]:left-1">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                onClick={() => logSocialClick("github")}
                className="inline-flex text-foreground transition hover:text-neutral-700"
              >
                <GithubIcon className="h-10 w-10 xs:h-11 xs:w-11 max-[320px]:h-8 max-[320px]:w-8" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                onClick={() => logSocialClick("linkedin")}
                className="inline-flex text-foreground transition hover:text-neutral-700"
              >
                <LinkedinIcon className="h-10 w-10 xs:h-11 xs:w-11 max-[320px]:h-8 max-[320px]:w-8" />
              </a>
              <a
                href={tryhackmeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="TryHackMe profile"
                onClick={() => logSocialClick("tryhackme")}
                className="inline-flex text-foreground transition hover:text-neutral-700"
              >
                <TryHackMeIcon className="h-10 w-10 xs:h-11 xs:w-11 max-[320px]:h-8 max-[320px]:w-8" />
              </a>
            </div>

            {/* Location & Birthdate info on Right */}
            <div className="font-tertiary flex flex-col items-end text-right text-xs xs:text-sm font-medium text-foreground ml-auto">
              <p>April 19, 2003</p>
              <span>Kottayam, Kerala, India</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Text Stack under the image */}
        <motion.div
          className="flex flex-col items-center text-center gap-2 sm:gap-4 w-full z-10 mt-1 sm:mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Role Switcher under image */}
          <div className="w-full flex justify-center max-w-md">
            <MorphingText
              texts={["Software Engineer", "Security Enthusiast"]}
              className="font-secondary text-3xl sm:text-4xl text-foreground font-bold fill-foreground"
            />
          </div>
        </motion.div>
      </div>

      {/* ==================== DESKTOP LAYOUT (>= lg) ==================== */}
      <div className="hidden lg:flex w-full flex-col gap-10">
        {/* Main Hero Row: Text + Cutout Image */}
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
          {/* Hero Text Stack */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 w-full lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Status / Clearance Badge */}
            <div className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-4 py-1.5 font-tertiary text-base lg:text-lg font-bold uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              <RadioTowerIcon className="w-5 h-5 lg:w-6 lg:h-6" />
              PORTFOLIO
            </div>

            <h1 className="font-heading text-5xl uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
              TOM SABU.
            </h1>

            {/* Role Switcher */}
            <div className="w-full flex justify-center lg:justify-start">
              <MorphingText
                texts={["Software Engineer", "Security Enthusiast"]}
                className="font-secondary text-2xl sm:text-3xl md:text-4xl text-foreground font-bold"
              />
            </div>
          </motion.div>

          {/* Hero Transparent Image Cutout */}
          <motion.div
            className="relative w-52 sm:w-64 md:w-80 lg:w-[35%] shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <img
              src={tom_sabu}
              alt="Tom Sabu"
              width={550}
              height={689}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </div>

        {/* Location & Social Row (Location Info elevated upper on the right) */}
        <motion.div
          className="flex flex-col items-center justify-between gap-6 pt-2 sm:flex-row w-full relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Social Links (Clean icons) */}
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              onClick={() => logSocialClick("github")}
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <GithubIcon className="h-12 w-12" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              onClick={() => logSocialClick("linkedin")}
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <LinkedinIcon className="h-12 w-12" />
            </a>
            <a
              href={tryhackmeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="TryHackMe profile"
              onClick={() => logSocialClick("tryhackme")}
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <TryHackMeIcon className="h-12 w-12" />
            </a>
          </div>

          {/* Location & Birthdate info (Elevated upper on right) */}
          <div className="font-tertiary flex flex-col items-center sm:items-end text-center sm:text-right text-base md:text-lg font-medium text-foreground sm:-mt-12">
            <p>April 19, 2003</p>
            <span>Kottayam, Kerala, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomePage;
