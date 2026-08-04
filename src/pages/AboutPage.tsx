import { motion } from "motion/react";
import MusicIcon from "@iconify-react/mdi/music";
import GoogleGamepadIcon from "@iconify-react/mdi/google-gamepad";
import IdeaIcon from "@iconify-react/mdi/idea";

function AboutPage() {
  const hobbies = [
    {
      title: "Esports",
      icon: GoogleGamepadIcon,
      description:
        "I’m truly passionate about esports and the energy of competitive gaming. The thrill of competition and the community around it always keep me excited and inspired.",
    },
    {
      title: "Music",
      icon: MusicIcon,
      description:
        "Music is one of my favorite ways to relax and recharge. I love getting lost in melodies and discovering new sounds that match every mood.",
    },
    {
      title: "New Innovations",
      icon: IdeaIcon,
      description:
        "I enjoy exploring emerging technologies and creative ideas. From gadgets to futuristic tools, I’m always curious about what’s next.",
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-foreground text-background -mt-24 pt-36 pb-28 md:-mt-32 md:pt-44 md:pb-36"
      style={{
        clipPath:
          "polygon(0 12%, 35% 6%, 70% 10%, 100% 0%, 100% 88%, 65% 94%, 30% 90%, 0 100%)",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 md:px-12 lg:flex-row lg:items-start">
        {/* Left Column: About Me */}
        <motion.div
          className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-4 inline-block -rotate-2 border-2 border-background bg-background px-3 py-1 font-tertiary text-xs font-bold uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
            OPERATIVE PROFILE
          </div>

          <h2 className="font-secondary text-5xl font-bold uppercase text-background md:text-7xl">
            About Me
          </h2>

          <p className="mt-6 font-tertiary text-base font-medium leading-relaxed text-background/90 md:text-lg">
            B.Tech graduate in Computer Science and Engineering with a deep
            passion for full-stack development and cybersecurity. Currently
            working as a Junior Software Engineer, I specialize in building
            high-performance web applications using the PERN stack, Next.js, and
            AWS. My expertise spans across modern web frameworks, cloud
            technologies, and DevOps practices, with a strong focus on
            implementing CI/CD pipelines and SecOps workflows. I thrive on
            creating scalable software solutions and continuously exploring
            innovative technologies to solve real-world problems.
          </p>
        </motion.div>

        {/* Right Column: Hobbies & Passion */}
        <motion.div
          className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="mb-4 inline-block rotate-1 border-2 border-background bg-background px-3 py-1 font-tertiary text-xs font-bold uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
            PERSONAL LOG
          </div>

          <h2 className="font-secondary text-5xl font-bold uppercase text-background md:text-7xl">
            Hobbies
          </h2>

          <div className="mt-6 flex w-full flex-col divide-y divide-background/20">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;

              return (
                <div
                  key={hobby.title}
                  className="flex items-start gap-4 py-5 text-left"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-background bg-background/10 p-2 text-background shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                    <Icon className="h-7 w-7 text-background" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-secondary text-2xl font-bold uppercase text-background">
                      {hobby.title}
                    </h3>

                    <p className="mt-1 font-tertiary text-xs md:text-sm leading-relaxed text-background/80">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
