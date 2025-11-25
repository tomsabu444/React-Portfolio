import React from 'react';
import { tools_Icons_1, tools_Icons_2 } from '../../assets/Skill-Icon.js';

const SkillsApp = () => {
  const skillsData = [
    { name: "Web Development", percent: 75 },
    { name: "Ethical Hacking", percent: 60 },
    { name: "Editing", percent: 30 },
    { name: "DevOps and System Design", percent: 35 },
    { name: "Game Development", percent: 10 }
  ];

  return (
    <div className="p-6 space-y-8">
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

      <section>
        <h3 className="text-xl font-bold text-white mb-4">Languages | Frameworks</h3>
        <div className="flex flex-wrap gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          {tools_Icons_1.map((icon, index) => (
            <div key={index} className="w-16 h-16 p-2 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" title={icon.title}>
              <img src={icon.src} alt={icon.alt} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-4">Technologies I'm Using</h3>
        <div className="flex flex-wrap gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          {tools_Icons_2.map((icon, index) => (
            <div key={index} className="w-16 h-16 p-2 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" title={icon.title}>
              <img src={icon.src} alt={icon.alt} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsApp;
