import { motion } from "motion/react";
// import TerminalIcon from "@iconify-react/mdi/terminal";

function ExperiencePage() {
  const experience = [
    {
      title: "JUNIOR SOFTWARE ENGINEER",
      company: "THOPPS TECHNOLOGIES",
      period: "MAY 2025 – PRESENT",
      type: "FULL-TIME",
      current: true,
      stamp: "ACTIVE_MISSION",
      rotation: -2,
      shadowDirection: "right",
    },
    {
      title: "FREELANCE DEVELOPER",
      company: "HULT INFOTECH",
      period: "OCT 2024 – AUG 2025",
      type: "PART-TIME",
      stamp: "MISSION_COMPLETE",
      rotation: 3,
      shadowDirection: "left",
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-start py-6 text-foreground"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center px-4 md:px-8">
        {/* Main Section Header Banner */}
        <div className="relative mb-12 flex flex-col items-center text-center">
          <motion.div
            className="border-4 border-foreground bg-foreground px-8 py-4 text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2"
            style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-secondary text-5xl font-bold uppercase tracking-tight md:text-7xl">
              EXPERIENCE
            </h2>
          </motion.div>

          <div className="mt-3 inline-block -rotate-1 border-2 border-foreground bg-background px-4 py-1 font-tertiary text-xs font-bold tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
            CAREER JOURNEY // CHRONOLOGY
          </div>
        </div>

        {/* Career Journey Timeline */}
        <div className="w-full">
          {/* <div className="mb-10 flex items-center justify-between pb-3">
            <h3 className="font-secondary text-4xl text-foreground md:text-5xl flex items-center gap-3">
              <TerminalIcon className="w-8 h-8 text-foreground" />
              Career Journey
            </h3>
            <span className="font-tertiary text-xs font-bold uppercase tracking-wider text-foreground/70 hidden sm:inline-block">
              [ CHRONOLOGY ]
            </span>
          </div> */}

          <div className="relative flex w-full flex-col items-center justify-center py-6">
            {/* Vertical Axis Line (Mobile) */}
            <motion.div
              className="absolute inset-y-0 left-1/2 block w-1 -translate-x-1/2 rounded-full bg-foreground md:hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%, 50% 100%)",
                transformOrigin: "top",
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />

            {/* Triangle Indicator at Left End (Desktop) */}
            <motion.div
              className="absolute left-0 top-1/2 hidden -translate-y-1/2 -translate-x-3 md:flex items-center justify-center border-2 border-foreground bg-background p-1.5 shadow-[-3px_0px_0px_0px_rgba(0,0,0,1)] rounded-full z-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[9px] border-l-transparent border-r-transparent border-b-foreground -rotate-90" />
            </motion.div>

            {/* Triangle Indicator at Top End (Mobile) */}
            <motion.div
              className="absolute top-0 left-1/2 flex md:hidden -translate-x-1/2 -translate-y-3 items-center justify-center border-2 border-foreground bg-background p-1.5 shadow-[0px_-3px_0px_0px_rgba(0,0,0,1)] rounded-full z-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[9px] border-l-transparent border-r-transparent border-b-foreground" />
            </motion.div>

            {/* Horizontal Axis Line (Desktop) */}
            <motion.div
              className="absolute inset-x-0 top-1/2 hidden h-1 -translate-y-1/2 rounded-full bg-foreground md:block"
              style={{
                clipPath: "polygon(0 100%, 0 0, 100% 50%, 100% 50%)",
                transformOrigin: "right",
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />

            <div className="relative flex w-full max-w-6xl flex-col items-center justify-around gap-12 px-2 md:flex-row">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  className={`group relative flex flex-col items-center ${
                    index === 0 ? "md:mb-16" : "md:mt-16"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -6 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className={`max-w-sm border-4 border-foreground bg-white p-6 ${
                      job.shadowDirection === "right"
                        ? "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        : "shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"
                    }`}
                    animate={{ rotate: job.rotation }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 border-2 border-foreground bg-foreground px-2 py-0.5 font-tertiary text-[11px] font-bold uppercase text-background">
                        {job.current && (
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-background" />
                          </span>
                        )}
                        <span>{job.stamp}</span>
                      </div>
                      <span className="font-tertiary text-[10px] font-bold tracking-widest text-foreground/60 uppercase">
                        MISSION_
                        {String(experience.length - index).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="font-secondary text-2xl font-bold text-foreground md:text-3xl">
                      {job.title}
                    </h4>
                    <p className="mt-1 font-tertiary text-sm font-semibold uppercase text-foreground/80">
                      @{job.company}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-foreground/20 pt-3">
                      <p className="font-tertiary text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                        {job.period}
                      </p>
                      {job.type && (
                        <span className="border-2 border-foreground bg-background px-2 py-0.5 font-tertiary text-[10px] font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {job.type}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
