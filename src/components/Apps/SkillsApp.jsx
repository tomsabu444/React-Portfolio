import React from 'react';
import IconCloud from '../ui/IconCloud';

const SkillsApp = () => {
  const skillsData = [
    { name: "Web Development", percent: 75 },
    { name: "Ethical Hacking", percent: 60 },
    { name: "Editing", percent: 30 },
    { name: "DevOps and System Design", percent: 35 },
    { name: "Game Development", percent: 10 }
  ];

  const languageSlugs = [
    "html5",
    "css3",
    "javascript",
    "react",
    "flutter",
    "tailwindcss",
    "express",
    "mongodb",
    "flask",
    "mysql",
    "electron",
    "firebase",
    "nodedotjs",
    "git",
    "c",
    "python",
    "java",
  ];

  const technologySlugs = [
    "prisma",
    "postgresql",
    "amazonaws",
    "awslambda",
    "amazons3",
    "amazonrds",
    "nginx",
    "cloudflare",
    "postman",
    "jira",
    "bitbucket",
    "netlify",
    "vercel",
    "github",
    "githubactions",
    "docker",
    "figma",
    "visualstudiocode",
    "androidstudio",
    "discord",
    "googlecloud",
    "linux",
    "adobeaftereffects",
    "adobepremierepro",
    "adobephotoshop",
    "adobeillustrator",
    "blender",
    "android",
  ];

  return (
    <div className="p-6 space-y-8 ">
      <section>
        <h2 className="text-2xl font-bold text-purple-400 mb-6 border-b border-purple-500/30 pb-2">Technical Skills</h2>
        <div className="space-y-4">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-xl font-bold text-white mb-4 text-center">Languages | Frameworks</h3>
          <div className="relative flex h-full max-w-lg items-center justify-center overflow-hidden rounded-lg  pb-20 pt-8">
            <IconCloud iconSlugs={languageSlugs} />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-4 text-center">Technologies I'm Using</h3>
          <div className="relative flex h-full max-w-lg items-center justify-center overflow-hidden rounded-lg pb-20 pt-8">
            <IconCloud iconSlugs={technologySlugs} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsApp;
