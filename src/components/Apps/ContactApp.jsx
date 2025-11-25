import React, { useState } from 'react';
import { Mail, Calendar, Linkedin, Github, Instagram, ChevronDown, Download } from 'lucide-react';
import Tom_Photo from '../../assets/images/tom_photo.webp';

const ContactApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/tomsabu444/", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/tomsabu444", label: "GitHub" },
    { icon: Instagram, url: "https://www.instagram.com/tom_vettithanam/", label: "Instagram" }
  ];

  return (
    <div className="p-6 h-full flex flex-col items-center justify-center text-center space-y-6">
      <div className="relative group">
        <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-green-500/50 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
          <img 
            src={Tom_Photo} 
            alt="Tom Sabu" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Tom+Sabu&background=0D8ABC&color=fff';
            }}
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">TOM SABU</h2>
        <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-sm text-green-400 border border-green-500/30">
          Ethical Hacking | Web Dev
        </div>
      </div>

      <div className="w-full max-w-sm bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <span className="text-gray-300 font-medium">Contact Info</span>
          <ChevronDown className={`text-green-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 pt-0 space-y-4 border-t border-white/10">
            <div className="flex items-center space-x-3 text-left">
              <div className="p-2 bg-white/10 rounded-lg">
                <Mail className="text-yellow-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <a href="mailto:tomsabu0000@gmail.com" className="text-sm text-white hover:text-green-400 transition-colors">
                  tomsabu0000@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-left">
              <div className="p-2 bg-white/10 rounded-lg">
                <Calendar className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Birthday</p>
                <p className="text-sm text-white">April 19, 2003</p>
              </div>
            </div>

            {/* <div className="pt-2">
              <a 
                href="/resume/TomSabuResume.pdf" 
                target="_blank"
                className="flex items-center justify-center space-x-2 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 text-gray-400 transition-all duration-300 hover:-translate-y-1"
            title={social.label}
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactApp;
