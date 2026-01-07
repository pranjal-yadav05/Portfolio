"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-[#121212] relative overflow-hidden flex items-center">
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
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-3 text-[#f0f0f0]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-300">
              Core Tech Stacks
            </span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto text-sm md:text-base mt-4">
            Three stacks I work with most, spanning Java backends and full-stack
            JavaScript
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Spring Boot */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-[#151515]/90 rounded-2xl border border-[#2a2a2a] shadow-lg p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#166534]/30 text-emerald-300">
                <BiLogoSpringBoot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f5f5]">
                  Spring Boot
                </h3>
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/80">
                  Java Backend APIs
                </p>
              </div>
            </div>
            <p className="text-sm text-[#d0d0d0] leading-relaxed">
              Building robust REST APIs, authentication flows, and
              production-ready services with Spring Boot and SQL databases.
            </p>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                SmartBlog
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1f2937] text-[#e5e7eb] border border-white/5">
                REST APIs
              </span>
            </div>
          </motion.div>

          {/* Java */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-[#151515]/90 rounded-2xl border border-[#2a2a2a] shadow-lg p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#1d4ed8]/25 text-[#bfdbfe]">
                <span className="text-sm font-mono font-semibold">JAVA</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f5f5]">Java</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-[#93c5fd]">
                  Core &amp; OOP
                </p>
              </div>
            </div>
            <p className="text-sm text-[#d0d0d0] leading-relaxed">
              Strong foundation in core Java, OOP, collections, and backend
              development patterns used across my academic and personal
              projects.
            </p>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#1e293b] text-[#e5e7eb] border border-[#334155]">
                Data Structures &amp; Algorithms
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0f172a] text-[#93c5fd] border border-[#1d4ed8]/40">
                Backend Foundations
              </span>
            </div>
          </motion.div>

          {/* MERN */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-[#151515]/90 rounded-2xl border border-[#2a2a2a] shadow-lg p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0f172a] text-[#a5f3fc]">
                <div className="flex -space-x-1">
                  <FaReact className="w-5 h-5" />
                  <FaNodeJs className="w-5 h-5" />
                  <SiMongodb className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f5f5]">
                  MERN Stack
                </h3>
                <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">
                  Full‑Stack Web Apps
                </p>
              </div>
            </div>
            <p className="text-sm text-[#d0d0d0] leading-relaxed">
              End‑to‑end applications with React/Next.js, Node.js/Express, and
              MongoDB, including payments, auth, and real‑time features.
            </p>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#022c22] text-[#6ee7b7] border border-[#10b981]/40">
                Uncle Nomad
              </span>
              <span className="px-3 py-1 rounded-full bg-[#020617] text-[#7dd3fc] border border-[#0ea5e9]/40">
                Lyceum
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
