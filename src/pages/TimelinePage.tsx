import { motion } from "motion/react";

function TimelinePage() {
  const experience = [
    {
      title: "JUNIOR SOFTWARE ENGINEER",
      company: "THOPPS TECHNOLOGIES",
      description:
        "Deploying high-performance web applications and securing infrastructure.",
      period: "MAY 2025 – PRESENT",
      current: true,
      stamp: "ACTIVE_MISSION",
      position: "above",
      rotation: -2,
      shadowOffset: 8,
      shadowDirection: "right",
      connectorOffset: "mt-[-8px]",
      connectorHeight: "h-24",
      nodePosition: "top-[50%]",
      nodeTranslate: "translate-y-[158px]",
    },
    {
      title: "FREELANCE DEVELOPER",
      company: "HULT INFOTECH",
      description:
        "Executing custom software solutions and architectural deep-dives.",
      period: "OCT 2024 – AUG 2025",
      stamp: "MISSION_COMPLETE",
      position: "below",
      rotation: 4,
      shadowOffset: 8,
      shadowDirection: "left",
      connectorOffset: "mb-[-8px]",
      connectorHeight: "h-24",
      nodePosition: "bottom-[50%]",
      nodeTranslate: "translate-y-[-158px]",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative flex min-h-screen items-center justify-center text-foreground"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-start">
        <h2 className="z-10 mb-6 font-secondary text-6xl  md:text-7xl">
          Career Journey
        </h2>

        <div className="relative flex w-full items-center justify-center py-6 md:py-10">
          <motion.div
            className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-foreground"
            style={{
              clipPath: "polygon(0 100%, 0 0, 100% 50%, 100% 50%)",
              transformOrigin: "right",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative flex w-full max-w-6xl flex-col items-center justify-around gap-12 px-2 md:flex-row ">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                className={`group relative flex flex-col items-center ${
                  index === 0 ? "md:mb-48" : "md:mt-48"
                }`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                }}
              >
                {/* {job.position === "below" && (
                  <motion.div
                    className={`absolute ${job.nodePosition} ${job.nodeTranslate} z-10 h-6 w-6 rotate-45 border-4 border-white bg-black`}
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.2 }}
                  />
                )} */}

                <motion.div
                  className={`max-w-xs border-8 border-foreground bg-white p-6 ${
                    job.shadowDirection === "right"
                      ? `shadow-[${job.shadowOffset}px_${job.shadowOffset}px_0px_0px_rgba(0,0,0,1)]`
                      : `shadow-[${-job.shadowOffset}px_${job.shadowOffset}px_0px_0px_rgba(0,0,0,1)]`
                  }`}
                  animate={{ rotate: job.rotation }}
                  whileHover={{ rotate: 0, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-2 inline-block border-2 border-foreground px-2 py-1 text-[10px] font-tertiary font-bold uppercase">
                    {job.stamp}
                  </div>
                  <h3 className="font-tertiary text-3xl font-extrabold">
                    {job.title}
                  </h3>
                  <p className="mb-2 mt-2 font-tertiary text-sm uppercase">
                    @{job.company}
                  </p>
                  {/* <p className="text-xs leading-relaxed text-black/70 italic">
                    &gt; {job.description}
                  </p> */}
                  <div className="mt-4">
                    <p className="font-tertiary text-[10px] uppercase tracking-[0.25em] text-black/50">
                      {job.period}
                    </p>
                  </div>
                </motion.div>

                {/* <div className={`absolute left-1/2 top-full ${job.connectorOffset} ${job.connectorHeight} w-1 -translate-x-1/2 bg-black`} /> */}

                {/* {job.position === "above" && (
                  <motion.div
                    className={`absolute ${job.nodePosition} ${job.nodeTranslate} z-10 h-6 w-6 rotate-45 border-4 border-white bg-black`}
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.2 }}
                  />
                )} */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          className="z-10 mt-2 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-black/60">
            STATUS: READY_FOR_DEPLOYMENT
          </p>
          <motion.button
            className="border-[4px] border-black px-16 py-4 font-heading text-3xl uppercase transition-all hover:bg-black hover:text-white active:translate-y-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            ESTABLISH_CONTACT
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}

export default TimelinePage;
