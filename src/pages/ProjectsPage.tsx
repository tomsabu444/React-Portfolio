import { motion } from "motion/react";
import { Project_list_1, type ProjectItem } from "@/assets/Project-list";

import OpenInNewIcon from "@iconify-react/mdi/open-in-new";
import FolderIcon from "@iconify-react/mdi/folder-account-outline";

const projects = Project_list_1 as ProjectItem[];

function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 text-foreground"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center px-4 md:px-8">

        {/* Main Section Header Banner */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <motion.div
            className="border-4 border-foreground bg-foreground px-8 py-4 text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2"
            style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-secondary text-5xl font-bold uppercase tracking-tight md:text-7xl">
              PROJECTS
            </h2>
          </motion.div>

          <div className="mt-3 inline-block -rotate-1 border-2 border-foreground bg-background px-4 py-1 font-tertiary text-xs font-bold tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
            CLASSIFIED OPERATIONS LOG
          </div>
        </div>

        {/* Section Title Bar */}
        <div className="mb-10 w-full flex items-center justify-between pb-3">
          <h3 className="font-secondary text-4xl text-foreground md:text-5xl flex items-center gap-3">
            <FolderIcon className="w-8 h-8 text-foreground" />
            Selected Projects
          </h3>
          <span className="font-tertiary text-xs font-bold uppercase tracking-wider text-foreground/70 hidden sm:inline-block">
            [ CLASSIFIED_ARCHIVE ]
          </span>
        </div>

        {/* Graphic Novel Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 w-full">

          {/* Project 1: Hero Card - 8 cols */}
          {projects[0] && (() => {
            const Icon0 = projects[0].icon;
            return (
              <motion.div
                className="relative md:col-span-8 pt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`absolute -top-3 left-4 z-10 ${projects[0].rotate} border-2 border-foreground bg-foreground px-3 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Icon0 className="w-4 h-4" />
                    {projects[0].badge}
                  </span>
                </div>

                <div
                  className="flex flex-col md:flex-row border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-6"
                  style={{ clipPath: "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)" }}
                >
                  <div className="w-full md:w-1/2 border-2 border-foreground overflow-hidden bg-foreground h-52 md:h-auto relative group">
                    <img
                      src={projects[0].src}
                      alt={projects[0].alt}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 border-2 border-foreground bg-background px-2 py-0.5 font-tertiary text-[10px] font-bold uppercase">
                      IOT SENSOR GRID
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h4 className="font-secondary text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {projects[0].blog_title}
                      </h4>
                      <p className="font-tertiary text-xs leading-relaxed text-foreground/80 border-l-4 border-foreground pl-3 mb-4">
                        {projects[0].blog_text}
                      </p>
                    </div>

                    <div className="mt-4 border-t-2 border-foreground pt-3 flex items-center justify-between">
                      <span className="font-tertiary text-[11px] font-bold uppercase tracking-wider text-foreground/70">
                        {projects[0].status}
                      </span>
                      <a
                        href={projects[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 border-2 border-foreground bg-foreground px-3 py-1 font-tertiary text-xs font-bold text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-colors"
                      >
                        VIEW <OpenInNewIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Project 2: Bully Barrier (4 cols) */}
          {projects[1] && (() => {
            const Icon1 = projects[1].icon;
            return (
              <motion.div
                className="relative md:col-span-4 pt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className={`absolute -top-3 right-4 z-10 ${projects[1].rotate} border-2 border-foreground bg-white px-3 py-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Icon1 className="w-4 h-4" />
                    {projects[1].badge}
                  </span>
                </div>

                <div
                  className="flex flex-col justify-between h-full border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
                >
                  <div>
                    <div className="w-full h-36 border-2 border-foreground overflow-hidden mb-4 bg-foreground relative group">
                      <img
                        src={projects[1].src}
                        alt={projects[1].alt}
                        className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-secondary text-2xl font-bold text-foreground mb-2">
                      {projects[1].blog_title}
                    </h4>
                    <p className="font-tertiary text-xs leading-relaxed text-foreground/80 mb-4">
                      {projects[1].blog_text}
                    </p>
                  </div>

                  <div className="mt-4 border-t-2 border-foreground pt-3 flex items-center justify-between">
                    <span className="font-tertiary text-[11px] font-bold uppercase tracking-wider text-foreground/70">
                      {projects[1].status}
                    </span>
                    <a
                      href={projects[1].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border-2 border-foreground bg-foreground px-3 py-1 font-tertiary text-xs font-bold text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-colors"
                    >
                      VIEW <OpenInNewIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Project 3: Pratitya 25 (6 cols) */}
          {projects[2] && (() => {
            const Icon2 = projects[2].icon;
            return (
              <motion.div
                className="relative md:col-span-6 pt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className={`absolute -top-3 left-4 z-10 ${projects[2].rotate} border-2 border-foreground bg-foreground px-3 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Icon2 className="w-4 h-4" />
                    {projects[2].badge}
                  </span>
                </div>

                <div
                  className="flex flex-col justify-between h-full border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  style={{ clipPath: "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)" }}
                >
                  <div>
                    <div className="w-full h-40 border-2 border-foreground overflow-hidden mb-4 bg-foreground relative group">
                      <img
                        src={projects[2].src}
                        alt={projects[2].alt}
                        className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-secondary text-2xl font-bold text-foreground mb-2">
                      {projects[2].blog_title}
                    </h4>
                    <p className="font-tertiary text-xs leading-relaxed text-foreground/80 mb-4">
                      {projects[2].blog_text}
                    </p>
                  </div>

                  <div className="mt-4 border-t-2 border-foreground pt-3 flex items-center justify-between">
                    <span className="font-tertiary text-[11px] font-bold uppercase tracking-wider text-foreground/70">
                      {projects[2].status}
                    </span>
                    <a
                      href={projects[2].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border-2 border-foreground bg-foreground px-3 py-1 font-tertiary text-xs font-bold text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-colors"
                    >
                      VIEW <OpenInNewIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Project 4: Golf Meet (6 cols) */}
          {projects[3] && (() => {
            const Icon3 = projects[3].icon;
            return (
              <motion.div
                className="relative md:col-span-6 pt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className={`absolute -top-3 right-4 z-10 ${projects[3].rotate} border-2 border-foreground bg-white px-3 py-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Icon3 className="w-4 h-4" />
                    {projects[3].badge}
                  </span>
                </div>

                <div
                  className="flex flex-col justify-between h-full border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
                >
                  <div>
                    <div className="w-full h-40 border-2 border-foreground overflow-hidden mb-4 bg-foreground relative group">
                      <img
                        src={projects[3].src}
                        alt={projects[3].alt}
                        className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-secondary text-2xl font-bold text-foreground mb-2">
                      {projects[3].blog_title}
                    </h4>
                    <p className="font-tertiary text-xs leading-relaxed text-foreground/80 mb-4">
                      {projects[3].blog_text}
                    </p>
                  </div>

                  <div className="mt-4 border-t-2 border-foreground pt-3 flex items-center justify-between">
                    <span className="font-tertiary text-[11px] font-bold uppercase tracking-wider text-foreground/70">
                      {projects[3].status}
                    </span>
                    <a
                      href={projects[3].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border-2 border-foreground bg-foreground px-3 py-1 font-tertiary text-xs font-bold text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-colors"
                    >
                      VIEW <OpenInNewIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Remaining Projects (5–10, 4 cols each) */}
          {projects.slice(4).map((project: ProjectItem, index: number) => {
            const BadgeIcon = project.icon;
            const isLightBadge = index % 2 === 1; // Alternating badge background
            return (
              <motion.div
                key={project.title}
                className="relative md:col-span-4 pt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`absolute -top-3 left-4 z-10 ${project.rotate} border-2 border-foreground ${isLightBadge ? "bg-white text-foreground" : "bg-foreground text-background"} px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <BadgeIcon className="w-4 h-4" />
                    {project.badge}
                  </span>
                </div>

                <div
                  className="flex flex-col justify-between h-full border-4 border-foreground bg-white p-5 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  style={{
                    clipPath:
                      index % 2 === 0
                        ? "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)"
                        : "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)",
                  }}
                >
                  <div>
                    <div className="w-full h-40 border-2 border-foreground overflow-hidden mb-3 bg-foreground relative group">
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-secondary text-xl font-bold text-foreground mb-1">
                      {project.blog_title}
                    </h4>
                    <p className="font-tertiary text-[11px] leading-relaxed text-foreground/80 mb-3 line-clamp-3">
                      {project.blog_text}
                    </p>
                  </div>

                  <div className="mt-3 border-t-2 border-foreground pt-2 flex items-center justify-between">
                    <span className="font-tertiary text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                      {project.status}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border-2 border-foreground bg-foreground px-2.5 py-0.5 font-tertiary text-[11px] font-bold text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-colors"
                    >
                      VIEW <OpenInNewIcon className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* End of Log Stamp Badge */}
        {/* <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="relative border-4 border-foreground bg-background p-4 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            <div className="font-secondary text-2xl font-extrabold uppercase text-foreground md:text-3xl">
              END OF LOG // NO FURTHER RECORDS
            </div>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}

export default ProjectsPage;
