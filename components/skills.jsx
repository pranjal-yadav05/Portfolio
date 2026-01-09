"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  // GSAP scroll animations
  useGSAP(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

    // Skill cards stagger animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.skill-card');
      if (cards.length) {
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            y: 80,
            rotateY: -15,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate card content elements with stagger
      cards.forEach((card, cardIndex) => {
        const elements = card.querySelectorAll('.skill-animate');
        if (elements.length) {
          gsap.fromTo(
            elements,
            { opacity: 0, x: -15 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
              delay: 0.3 + cardIndex * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="stack-section stack-section-3 min-h-screen py-20 bg-[#121212] relative overflow-hidden flex items-center">
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

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
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
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          style={{ perspective: "1000px" }}>
          {/* Spring Boot */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="skill-card bg-[#151515]/90 rounded-2xl border border-[#2a2a2a] shadow-lg p-6 flex flex-col gap-4">
            <div className="skill-animate flex items-center gap-3 mb-1">
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
            <p className="skill-animate text-sm text-[#d0d0d0] leading-relaxed">
              Building robust REST APIs, authentication flows, and
              production-ready services with Spring Boot and SQL databases.
            </p>
            <div className="skill-animate mt-1 flex flex-wrap gap-2 text-xs">
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
            whileHover={{ y: -6, scale: 1.01 }}
            className="skill-card bg-[#151515]/90 rounded-2xl border border-[#2a2a2a] shadow-lg p-6 flex flex-col gap-4">
            <div className="skill-animate flex items-center gap-3 mb-1">
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
            <p className="skill-animate text-sm text-[#d0d0d0] leading-relaxed">
              Strong foundation in core Java, OOP, collections, and backend
              development patterns used across my academic and personal
              projects.
            </p>
            <div className="skill-animate mt-1 flex flex-wrap gap-2 text-xs">
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
            whileHover={{ y: -6, scale: 1.01 }}
            className="skill-card bg-[#151515]/90 rounded-2xl border border-[#2a2a2a] shadow-lg p-6 flex flex-col gap-4">
            <div className="skill-animate flex items-center gap-3 mb-1">
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
            <p className="skill-animate text-sm text-[#d0d0d0] leading-relaxed">
              End‑to‑end applications with React/Next.js, Node.js/Express, and
              MongoDB, including payments, auth, and real‑time features.
            </p>
            <div className="skill-animate mt-1 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#022c22] text-[#6ee7b7] border border-[#10b981]/40">
                Uncle Nomad
              </span>
              <span className="px-3 py-1 rounded-full bg-[#020617] text-[#7dd3fc] border border-[#0ea5e9]/40">
                Lyceum
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

