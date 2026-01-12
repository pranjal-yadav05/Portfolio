"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Cpu, Globe, Rocket, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  {
    title: "Spring Boot",
    subtitle: "Java Backend APIs",
    description: "Building robust REST APIs, authentication flows, and production-ready services with Spring Boot and SQL databases.",
    icon: <BiLogoSpringBoot className="w-8 h-8" />,
    tags: ["SmartBlog", "REST APIs"],
    color: "emerald",
    accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    size: "large", // larger card
    rotation: -3,
    x: -20,
    y: 0,
  },
  {
    title: "Core Java",
    subtitle: "OOP & Patterns",
    description: "Strong foundation in Java, OOP, collections, and backend development patterns used across academic and personal projects.",
    icon: <Terminal className="w-8 h-8" />,
    tags: ["DSA", "System Design"],
    color: "blue",
    accent: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    size: "medium",
    rotation: 4,
    x: 0,
    y: 40,
  },
  {
    title: "MERN Stack",
    subtitle: "Full-Stack Web",
    description: "End-to-end applications with React/Next.js, Node.js/Express, and MongoDB, including payments and real-time features.",
    icon: (
      <div className="flex -space-x-1">
        <FaReact className="w-5 h-5" />
        <FaNodeJs className="w-5 h-5" />
        <SiMongodb className="w-5 h-5" />
      </div>
    ),
    tags: ["Uncle Nomad", "Lyceum"],
    color: "cyan",
    accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    size: "medium",
    rotation: -2,
    x: 20,
    y: -20,
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header entrance
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Skills stagger animation
    const cards = containerRef.current?.querySelectorAll(".skill-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9, y: 100, rotateY: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="stack-section stack-section-3 min-h-screen py-24 bg-[#0a0a0b] border-y border-[#232323] relative flex items-center overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
              Core Tech Stacks
            </span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto text-lg">
            Three core ecosystems I weave into every digital experience.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-7xl mx-auto">
          
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-card relative w-full ${
                skill.size === "large" ? "max-w-[420px]" : "max-w-[340px]"
              }`}
              initial={{ rotate: skill.rotation, x: skill.x, y: skill.y }}
              whileHover={{ 
                rotate: 0, 
                x: 0, 
                y: -10, 
                scale: 1.05,
                zIndex: 50,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-[#151518]/90 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 shadow-2xl relative group overflow-hidden">
                
                {/* Glow on hover */}
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  skill.color === "emerald" ? "from-emerald-500/20" : 
                  skill.color === "blue" ? "from-blue-500/20" : "from-cyan-500/20"
                } to-transparent`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-[#0a0a0b] border border-white/5 transition-transform group-hover:scale-110 duration-500 ${
                      skill.color === "emerald" ? "text-emerald-400 shadow-emerald-500/5" : 
                      skill.color === "blue" ? "text-blue-400 shadow-blue-500/5" : "text-cyan-400 shadow-cyan-500/5"
                    }`}>
                      {skill.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase ${skill.accent}`}>
                      {skill.subtitle}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-[#888] text-sm leading-relaxed mb-8 group-hover:text-[#aaa] transition-colors">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[10px] text-white/50 font-medium group-hover:border-white/10 group-hover:text-white/70 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Rocket className="w-24 h-24 rotate-12" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background labels or lines */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[#333] font-mono text-[10px] uppercase tracking-widest">
           <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" /> web services
           </div>
           <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3" /> architecture
           </div>
           <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3" /> backend first
           </div>
        </div>
      </div>
    </section>
  );
}
