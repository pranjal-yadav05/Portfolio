"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt} from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiPhp, SiMongodb, SiPostman } from "react-icons/si";
import { BiLogoVisualStudio, BiLogoSpringBoot } from "react-icons/bi";
import { BsFillPeopleFill, BsLightbulbFill } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { ChevronDown, ChevronUp, X } from "lucide-react";

// Define skills with icons and projects they were used in
const skills = [
  {
    category: "Frontend",
    items: [
      { 
        name: "HTML", 
        icon: FaHtml5,
        projects: ["Netizens", "Medlink"] 
      },
      { 
        name: "JavaScript", 
        icon: SiJavascript,
        projects: ["PowerAI", "Lyceum", "Uncle Nomad"] 
      },
      { 
        name: "React", 
        icon: FaReact,
        projects: ["Uncle Nomad", "Lyceum", "VidBot"] 
      },
      { 
        name: "Next", 
        icon: RiNextjsFill,
        projects: ["Uncle Nomad", "Lyceum", "VidBot"] 
      },
      { 
        name: "Tailwind CSS", 
        icon: SiTailwindcss,
        projects: ["Portfolio Site", "Dashboard UI"] 
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { 
        name: "Node.js", 
        icon: FaNodeJs,
        projects: ["Uncle Nomad", "Lyceum"] 
      },
      { 
        name: "Spring Boot", 
        icon: BiLogoSpringBoot,
        projects: ["SmartBlog"] 
      },
      { 
        name: "Python", 
        icon: FaPython,
        projects: ["VidBot"] 
      },
      { 
        name: "SQL", 
        icon: FaDatabase,
        projects: ["SmartBlog", "Netizens", "Medlink"] 
      },
      { 
        name: "MongoDB", 
        icon: SiMongodb,
        projects: ["Uncle Nomad", "Lyceum"] 
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { 
        name: "Git", 
        icon: FaGitAlt,
        projects: ["All Projects"] 
      },
      { 
        name: "VS Code", 
        icon: BiLogoVisualStudio,
        projects: ["All Projects"] 
      },
      {
        name: "Postman",
        icon: SiPostman,
        projects: ["All Projects"]
      },
      { 
        name: "Team Collaboration", 
        icon: BsFillPeopleFill,
        projects: ["Lyceum", "VidBot", "PowerAI"] 
      },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // State to track which skill's projects are currently showing on mobile
  const [activeSkill, setActiveSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Toggle active skill for mobile view
  const toggleActiveSkill = (skillName) => {
    if (activeSkill === skillName) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skillName);
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Background decorations - keeping from original */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#9d4edd]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }}
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#ff5e8f]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00d4ff]"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
              My Skills
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] rounded-full"></span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto">
            A showcase of my technical abilities and the projects where I've applied them
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-[#2d2d2d] rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
                  {skillGroup.category}
                </h3>

                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => {
                    const Icon = skill.icon;
                    const isActive = activeSkill === `${skillGroup.category}-${skill.name}`;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.2 + index * 0.1, duration: 0.5 }
                        } : {}}
                        className="group"
                      >
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#3d3d3d] transition-all duration-300">
                          <div className="text-2xl text-gradient bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
                            <Icon className="transform group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <span className="text-[#f0f0f0] font-medium">{skill.name}</span>
                          
                          {/* Projects button - both for desktop hover and mobile click */}
                          <div className="ml-auto relative">
                            {/* Desktop hover tooltip button */}
                            <button 
                              className="hidden md:block text-sm text-[#c0c0c0] hover:text-white bg-[#202020] hover:bg-[#303030] px-2 py-1 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-70"
                            >
                              Projects
                            </button>
                            
                            {/* Mobile toggle button */}
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleActiveSkill(`${skillGroup.category}-${skill.name}`);
                              }}
                              className="md:hidden text-sm text-[#c0c0c0] hover:text-white bg-[#202020] hover:bg-[#303030] px-2 py-1 rounded-full transition-all duration-300 flex items-center gap-1"
                            >
                              <span>Projects</span>
                              {isActive ? 
                                <ChevronUp className="w-3 h-3" /> : 
                                <ChevronDown className="w-3 h-3" />
                              }
                            </button>
                            
                            {/* Desktop hover projects tooltip */}
                            <div className="absolute bottom-full mb-2 right-0 w-48 bg-[#1a1a1a] shadow-xl rounded-lg p-3 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 hidden md:block">
                              <h4 className="text-sm font-semibold mb-2 text-white">Used in projects:</h4>
                              <ul className="space-y-1">
                                {skill.projects.map((project, idx) => (
                                  <li key={idx} className="text-xs text-[#c0c0c0] flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] mr-2"></span>
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile projects dropdown - shows when active */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-[#1a1a1a] p-3 rounded-lg mt-1 mb-2 mx-2"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-sm font-semibold text-white">Used in projects:</h4>
                              <button 
                                onClick={() => setActiveSkill(null)}
                                className="text-[#c0c0c0] hover:text-white"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                            <ul className="space-y-1">
                              {skill.projects.map((project, idx) => (
                                <li key={idx} className="text-xs text-[#c0c0c0] flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] mr-2"></span>
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}