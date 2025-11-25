import React from 'react';
import { Music, Gamepad2, Lightbulb } from 'lucide-react';

const AboutApp = () => {
  return (
    <div className="p-6 space-y-8 text-gray-300">
      <section>
        <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-500/30 pb-2">About Me</h2>
        <p className="leading-relaxed">
          As an engineering student, I have a deep passion for becoming a
          Developer. I am eager to expand my knowledge and explore new
          technologies, with a strong willingness to apply what I have
          learned. I am actively seeking opportunities where I can
          demonstrate my acquired skills and contribute to the achievement
          of organizational goals. With a comprehensive approach, I aim to
          provide a detailed understanding of my abilities and aspirations
          in an informal tone. By delving in-depth into my passion for
          development and my commitment.
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
