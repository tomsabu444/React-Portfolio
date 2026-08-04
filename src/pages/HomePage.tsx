import { motion } from "motion/react";
import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import RadioTowerIcon from "@iconify-react/mdi/radio-tower";
import { MorphingText } from "../components/ui/morphing-text";
import tom_sabu from "../assets/tom_sabu.png";

function HomePage() {
  const currentYear = new Date().getFullYear().toString();
  const githubUrl = "https://github.com/tomsabu444";
  const linkedinUrl = "https://www.linkedin.com/in/tomsabu444";

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center px-4 py-12 text-foreground sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Year display badge with inverted colors */}
      <div className="absolute right-4 top-6 z-10 flex flex-col items-end sm:right-8 lg:right-12">
        <div className="border-2 border-foreground bg-background px-3  font-tertiary text-2xl font-bold text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3 sm:text-3xl text-center flex flex-col">
          <span>{currentYear.slice(0, 2)}</span>
          <span>{currentYear.slice(2)}</span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10">
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
            <div className="inline-flex items-center gap-1.5 border-2 border-foreground bg-background px-3 py-1 font-tertiary text-xs font-bold uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              <RadioTowerIcon className="w-4 h-4" />
              PORTFOLIO
            </div>

            <h1 className="font-heading text-5xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
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

          {/* Hero Transparent Image Cutout (No rectangular box) */}
          <motion.div
            className="relative w-52 sm:w-64 md:w-80 lg:w-[35%] shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <img
              src={tom_sabu}
              alt="Tom Sabu"
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
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <GithubIcon className="h-10 w-10" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <LinkedinIcon className="h-10 w-10" />
            </a>
          </div>

          {/* Location & Birthdate info (Elevated upper on right) */}
          <div className="font-tertiary flex flex-col items-center sm:items-end text-center sm:text-right text-base md:text-lg font-medium text-foreground sm:-mt-12">
            <h3>April 19, 2003</h3>
            <h4>Kottayam, Kerala, India</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomePage;
