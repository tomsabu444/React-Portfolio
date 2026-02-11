import React from 'react';
import { Music, Gamepad2, Lightbulb } from 'lucide-react';

const AboutApp = () => {
  return (
    <div className="p-6 space-y-8 text-gray-300">
      <section>
        <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-500/30 pb-2">About Me</h2>
        <p className="leading-relaxed">
          B.Tech graduate in Computer Science and Engineering with a deep 
          passion for full-stack development and cybersecurity. Currently 
          working as a Junior Software Engineer, I 
          specialize in building high-performance web applications using the 
          PERN stack, Next.js, and AWS. My expertise spans across modern web 
          frameworks, cloud technologies, and DevOps practices, with a strong 
          focus on implementing CI/CD pipelines and SecOps workflows. I thrive 
          on creating scalable software solutions and continuously exploring 
          innovative technologies to solve real-world problems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-500/30 pb-2">Hobbies & Passion</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="p-3 bg-green-900/20 rounded-lg h-fit">
              <Gamepad2 className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Esports</h3>
              <p className="text-sm text-gray-400">
                I'm really into esports gaming! It's one of my absolute
                passion. I love the thrill of competing and the excitement of
                the gaming community. It's such a fantastic world to be a part
                of!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-green-900/20 rounded-lg h-fit">
              <Music className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Music</h3>
              <p className="text-sm text-gray-400">
                Listening to music is one of my favorite hobbies! I just love
                getting lost in the melodies and lyrics. It's such a great way
                to relax and unwind.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-green-900/20 rounded-lg h-fit">
              <Lightbulb className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Exploring New Innovations</h3>
              <p className="text-sm text-gray-400">
                I love exploring new technologies as a hobby! It's so exciting
                to discover the latest gadgets and innovations. From
                smartphones to virtual reality, there's always something new
                to learn and play with. It's like a never-ending adventure
                that keeps me entertained and curious.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutApp;
