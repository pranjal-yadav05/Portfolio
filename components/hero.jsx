"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Code, Zap } from 'lucide-react';

export default function Hero() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center py-16 relative overflow-hidden">
      {/* Dark gradient background with animated noise texture */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] to-[#121212] animated-bg" />

      {/* Enhanced animated background elements with more variety */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0.15 }}
          animate={{ 
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0.15 }}
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [1.1, 1.4, 1.1],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2 
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff5e8f]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5 
          }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 flex items-center justify-center w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl"
        >
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="h-1 w-6 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] rounded-full"></div>
                <span className="text-lg font-medium text-[#ff5e8f]">Hello, I'm</span>
                <div className="h-1 w-6 bg-gradient-to-r from-[#ff5e8f] to-[#9d4edd] rounded-full"></div>
              </div>
            </motion.div>
                
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#f5f5f5]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f0f0f0]">
                Pranjal Yadav
              </span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="relative mb-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-2xl md:text-3xl font-bold">
                <span className="text-[#c0c0c0]">I'm a</span>
                <div className="h-10 overflow-hidden">
                  <motion.div
                    animate={{
                      y: [0, -40, -80, -120, -160, -120, -80, -40, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-start gap-2"
                  >
                    <span className="text-[#9d4edd] h-10 flex items-center">Developer</span>
                    <span className="text-[#ff5e8f] h-10 flex items-center">Guitarist</span>
                    <span className="text-[#00d4ff] h-10 flex items-center">Student</span>
                    <span className="text-[#9d4edd] h-10 flex items-center">Explorer</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#c0c0c0] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Turning innovative ideas into{" "}
              <span className="font-semibold text-[#f0f0f0]">impactful solutions</span>{" "}
              through code and creativity.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] text-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#9d4edd]/20 transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(157, 78, 221, 0.25)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Code size={18} />
                  <span>View Projects</span>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#1a1a1a] border border-[#9d4edd]/50 text-[#f0f0f0] rounded-lg shadow-lg hover:shadow-xl hover:border-[#9d4edd] transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(10, 10, 10, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Zap size={18} />
                  <span>Connect With Me</span>
                </span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex justify-center lg:justify-start space-x-5">
                {[
                  { href: "https://github.com/pranjal-yadav05", icon: Github, label: "GitHub", color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]", shadowColor: "rgba(26, 26, 26, 0.4)" },
                  { href: "https://www.linkedin.com/in/pranjalyadavhere/", icon: Linkedin, label: "LinkedIn", color: "bg-[#9d4edd] hover:bg-[#8a3dcb]", shadowColor: "rgba(157, 78, 221, 0.4)" },
                  { href: "https://twitter.com/PranjalYad69290", icon: Twitter, label: "Twitter", color: "bg-[#00d4ff] hover:bg-[#00bfff]", shadowColor: "rgba(0, 212, 255, 0.4)" },
                ].map(({ href, icon: Icon, label, color, shadowColor }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${color} rounded-lg text-white transition-all flex items-center gap-2`}
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 15px -3px ${shadowColor}`
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={22} />
                    <span className="hidden md:inline">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Animated polygonal frame around image */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="450" height="450" viewBox="0 0 100 100" fill="none" className="absolute">
                <polygon 
                  points="50,5 65,35 95,50 65,65 50,95 35,65 5,50 35,35" 
                  stroke="url(#grad1)" 
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9d4edd" />
                    <stop offset="100%" stopColor="#ff5e8f" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 25px 8px rgba(157, 78, 221, 0.3)", 
                  "0 0 35px 12px rgba(255, 94, 143, 0.3)", 
                  "0 0 25px 8px rgba(157, 78, 221, 0.3)"
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="absolute inset-0 rounded-2xl opacity-70 flex items-center justify-center" 
            />
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative rounded-2xl overflow-hidden border-2 border-[#2d2d2d] shadow-xl"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="Pranjal Yadav"
                  width={320}
                  height={320}
                  className="object-cover h-full w-full"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-[#c0c0c0] mb-2">Explore More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-3 rounded-full bg-[#1a1a1a] border border-[#9d4edd]/30 hover:border-[#9d4edd] cursor-pointer transition-all"
        >
          <ArrowDown size={20} className="text-[#9d4edd]" />
        </motion.div>
      </motion.div>
    </section>
  );
}