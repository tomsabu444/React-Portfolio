import { motion } from "motion/react";
import HtmlIcon from "@iconify-react/mdi/language-html5";
import CssIcon from "@iconify-react/mdi/language-css3";
import JsIcon from "@iconify-react/mdi/language-javascript";
import TsIcon from "@iconify-react/mdi/language-typescript";
import ReactIcon from "@iconify-react/mdi/react";
import TailwindIcon from "@iconify-react/mdi/tailwind";
import NodeIcon from "@iconify-react/mdi/nodejs";
import ExpressIcon from "@iconify-react/mdi/server-network";
import PythonIcon from "@iconify-react/mdi/language-python";
import CIcon from "@iconify-react/mdi/language-c";
import DatabaseIcon from "@iconify-react/mdi/database";
import GitIcon from "@iconify-react/mdi/git";
import AwsIcon from "@iconify-react/mdi/aws";
import DockerIcon from "@iconify-react/mdi/docker";
import GithubIcon from "@iconify-react/mdi/github";
import LinuxIcon from "@iconify-react/mdi/linux";
import VsCodeIcon from "@iconify-react/mdi/microsoft-visual-studio-code";
import PromptIcon from "@iconify-react/mdi/auto-fix";
import CloudflareIcon from "@iconify-react/mdi/cloud-outline";
import KaliIcon from "@iconify-react/mdi/shield-lock-outline";
import AfterEffectsIcon from "@iconify-react/mdi/movie-edit-outline";
import FirebaseIcon from "@iconify-react/mdi/firebase";
// import WrenchIcon from "@iconify-react/mdi/hammer-wrench";
import ShieldIcon from "@iconify-react/mdi/shield-check-outline";
import WebIcon from "@iconify-react/mdi/web";
import PaletteIcon from "@iconify-react/mdi/palette";
import MonitorIcon from "@iconify-react/mdi/monitor";
import RocketIcon from "@iconify-react/mdi/rocket-launch";

function SkillsPage() {
  const coreSkills = [
    { name: "HTML5", icon: HtmlIcon, bg: "bg-foreground text-background", rotate: "rotate-2" },
    { name: "CSS3", icon: CssIcon, bg: "bg-background text-foreground", rotate: "-rotate-1" },
    { name: "JavaScript", icon: JsIcon, bg: "bg-foreground text-background", rotate: "rotate-3" },
    { name: "TypeScript", icon: TsIcon, bg: "bg-background text-foreground", rotate: "-rotate-2" },
    { name: "React", icon: ReactIcon, bg: "bg-foreground text-background", rotate: "rotate-1" },
    { name: "Tailwind CSS", icon: TailwindIcon, bg: "bg-background text-foreground", rotate: "-rotate-3" },
    { name: "Node.js", icon: NodeIcon, bg: "bg-foreground text-background", rotate: "rotate-2" },
    { name: "Express.js", icon: ExpressIcon, bg: "bg-foreground text-background", rotate: "-rotate-1" },
    { name: "Python", icon: PythonIcon, bg: "bg-foreground text-background", rotate: "rotate-3" },
    { name: "C", icon: CIcon, bg: "bg-foreground text-background", rotate: "-rotate-2" },
    { name: "Databases", icon: DatabaseIcon, bg: "bg-foreground text-background", rotate: "-rotate-3" },
    { name: "Git", icon: GitIcon, bg: "bg-foreground text-background", rotate: "rotate-2" },
  ];

  const fieldGear = [
    { name: "AWS", icon: AwsIcon, bg: "bg-background text-foreground", rotate: "-rotate-2" },
    { name: "Docker", icon: DockerIcon, bg: "bg-foreground text-background", rotate: "rotate-1" },
    { name: "GitHub", icon: GithubIcon, bg: "bg-background text-foreground", rotate: "-rotate-3" },
    { name: "Linux", icon: LinuxIcon, bg: "bg-foreground text-background", rotate: "rotate-2" },
    { name: "VS Code", icon: VsCodeIcon, bg: "bg-background text-foreground", rotate: "-rotate-1" },
    { name: "Prompt Engineering", icon: PromptIcon, bg: "bg-foreground text-background", rotate: "rotate-3" },
    { name: "Kali Linux", icon: KaliIcon, bg: "bg-background text-foreground", rotate: "-rotate-1" },
    { name: "Adobe After Effects", icon: AfterEffectsIcon, bg: "bg-foreground text-background", rotate: "rotate-2" },
    { name: "Firebase", icon: FirebaseIcon, bg: "bg-foreground text-background", rotate: "rotate-3" },
    { name: "Cloudflare", icon: CloudflareIcon, bg: "bg-background text-foreground", rotate: "-rotate-2" },
    // { name: "API Tools", icon: PostmanIcon, bg: "bg-foreground text-background", rotate: "rotate-1" },
    { name: "DevOps & CI/CD", icon: RocketIcon, bg: "bg-foreground text-background", rotate: "rotate-2" },
    { name: "Web Security", icon: ShieldIcon, bg: "bg-background text-foreground", rotate: "-rotate-1" },
    { name: "UI Design", icon: PaletteIcon, bg: "bg-foreground text-background", rotate: "rotate-3" },
  ];

  return (
    <section
      id="skills"
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-start py-6 text-foreground"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center px-4 md:px-8">
        {/* Main Section Header Banner */}
        <div className="relative mb-12 flex flex-col items-center text-center">
          <motion.div
            className="border-4 border-foreground bg-foreground px-8 py-4 text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1"
            style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-secondary text-5xl font-bold uppercase tracking-tight md:text-7xl">
              SKILLS & TOOLS
            </h2>
          </motion.div>

          <div className="mt-3 inline-block rotate-1 border-2 border-foreground bg-background px-4 py-1 font-tertiary text-xs font-bold tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
            TECHNICAL LOADOUT // STACK
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          {/* <div className="mb-10 flex items-center justify-between pb-3">
            <h3 className="font-secondary text-4xl text-foreground md:text-5xl flex items-center gap-3">
              <WrenchIcon className="w-8 h-8 text-foreground" />
              Skill Inventory
            </h3>
            <span className="font-tertiary text-xs font-bold uppercase tracking-wider text-foreground/70 hidden sm:inline-block">
              [ TECHNICAL_LOADOUT ]
            </span>
          </div> */}

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Core Skills Panel */}
            <motion.div
              className="relative pt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -top-3 left-4 z-10 -rotate-1 border-2 border-foreground bg-foreground px-4 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-secondary text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                  <WebIcon className="w-5 h-5" />
                  CORE_SKILLS
                </h4>
              </div>

              <div
                className="border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                style={{ clipPath: "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)" }}
              >
                <div className="mt-4 flex flex-wrap gap-3">
                  {coreSkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className={`flex items-center gap-2 border-2 border-foreground p-2.5 ${skill.bg} ${skill.rotate} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 shrink-0" />
                        <span className="font-tertiary text-xs font-bold uppercase tracking-wider">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Field Gear & DevOps Panel */}
            <motion.div
              className="relative pt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute -top-3 right-4 z-10 rotate-2 border-2 border-foreground bg-background px-4 py-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-secondary text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                  <MonitorIcon className="w-5 h-5" />
                  FIELD_GEAR & TOOLS
                </h4>
              </div>

              <div
                className="border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
              >
                <div className="mt-4 flex flex-wrap gap-3">
                  {fieldGear.map((gear) => {
                    const Icon = gear.icon;
                    return (
                      <motion.div
                        key={gear.name}
                        className={`flex items-center gap-2 border-2 border-foreground p-2.5 ${gear.bg} ${gear.rotate} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 shrink-0" />
                        <span className="font-tertiary text-xs font-bold uppercase tracking-wider">
                          {gear.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
