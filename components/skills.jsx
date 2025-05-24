"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
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
        projects: ["Netizens", "Medlink"],
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        projects: ["PowerAI", "Lyceum", "Uncle Nomad"],
      },
      {
        name: "React",
        icon: FaReact,
        projects: ["Uncle Nomad", "Lyceum", "VidBot"],
      },
      {
        name: "Next",
        icon: RiNextjsFill,
        projects: ["Uncle Nomad", "Lyceum", "VidBot"],
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        projects: ["Portfolio Site", "Dashboard UI"],
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        projects: ["Uncle Nomad", "Lyceum"],
      },
      {
        name: "Spring Boot",
        icon: BiLogoSpringBoot,
        projects: ["SmartBlog"],
      },
      {
        name: "Python",
        icon: FaPython,
        projects: ["VidBot"],
      },
      {
        name: "SQL",
        icon: FaDatabase,
        projects: ["SmartBlog", "Netizens", "Medlink"],
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        projects: ["Uncle Nomad", "Lyceum"],
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        projects: ["All Projects"],
      },
      {
        name: "VS Code",
        icon: BiLogoVisualStudio,
        projects: ["All Projects"],
      },
      {
        name: "Postman",
        icon: SiPostman,
        projects: ["All Projects"],
      },
      {
        name: "Team Collaboration",
        icon: BsFillPeopleFill,
        projects: ["Lyceum", "VidBot", "PowerAI"],
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
    <section
      id="skills"
      className="py-20 bg-[#121212] relative overflow-hidden">
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
            repeatType: "reverse",
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
            delay: 1,
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
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00d4ff]"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative text-[#f0f0f0]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
              Skills & Tools
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] rounded-full"></span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto">
            A showcase of my technical skills and tools that I've worked with on
            various projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className="p-6 border-b border-[#2d2d2d]">
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-4">
                  {category.category}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.map((skill) => (
                    <li key={skill.name}>
                      <div
                        className="flex items-center justify-between cursor-pointer group"
                        onClick={() => toggleActiveSkill(skill.name)}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2d2d2d] text-[#f0f0f0] group-hover:bg-[#333]">
                            <skill.icon className="w-6 h-6" />
                          </div>
                          <span className="text-[#f0f0f0] font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <button className="text-[#c0c0c0] hover:text-[#f0f0f0] transition-colors md:hidden">
                          {activeSkill === skill.name ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                      </div>

                      {/* Projects used in (desktop) */}
                      <div className="hidden md:block mt-2 pl-13">
                        <div className="text-[#c0c0c0] text-sm">
                          <span className="font-medium">Projects: </span>
                          {skill.projects.join(", ")}
                        </div>
                      </div>

                      {/* Projects used in (mobile) */}
                      {activeSkill === skill.name && (
                        <div className="md:hidden mt-2 ml-13 pl-4 border-l-2 border-[#2d2d2d]">
                          <div className="text-[#c0c0c0] text-sm">
                            <div className="font-medium mb-1">Used in:</div>
                            <ul className="space-y-1">
                              {skill.projects.map((project) => (
                                <li key={project}>{project}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#f0f0f0]">Soft Skills</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: BsFillPeopleFill,
                title: "Team Collaboration",
                description:
                  "Effective communication and collaboration with team members to achieve project goals.",
              },
              {
                icon: BsLightbulbFill,
                title: "Problem Solving",
                description:
                  "Analytical thinking and creative approaches to solve complex problems efficiently.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-6 bg-[#1a1a1a] rounded-xl shadow-lg"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#9d4edd] to-[#ff5e8f] text-white shrink-0">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#f0f0f0] mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-[#c0c0c0]">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
