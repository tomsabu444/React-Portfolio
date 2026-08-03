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
      className="relative flex items-center justify-between w-full"
    >
      <div
        className="w-full absolute -top-20 h-screen bg-foreground -z-10"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 15%)",
        }}
      />

      <div className="flex flex-col gap-6 w-full h-[85vh] justify-center items-center">
        <h2 className="font-secondary text-background text-7xl ">About Me</h2>

        <p className="font-tertiary text-background text-lg font-medium w-3/4 text-center">
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
      </div>

      <div className="flex flex-col gap-6 w-full h-full justify-center items-center px-6">
        <h2 className="font-secondary text-background text-7xl text-center">
          Hobbies & Passion
        </h2>

        <div className="flex w-full flex-col divide-y divide-background/15">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;

            return (
              <div key={hobby.title} className="flex items-start gap-4 py-5">
                {/* Icon */}
                {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-background/20 bg-background/10"> */}
                <Icon className="w-10 text-background" />
                {/* </div> */}

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-secondary text-xl text-background">
                    {hobby.title}
                  </h3>

                  <p className="mt-1 font-tertiary text-sm leading-relaxed text-background/80">
                    {hobby.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
