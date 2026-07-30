"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import ButtonLink from "./ui/button-link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Ordered most-recent first
const EXPERIENCES = [
  {
    id: "associate-engineer",
    role: "Associate Engineer",
    company: "eInfochips (An Arrow Company)",
    logo: "/einfochips_logo.jpg",
    period: "Jul 2026 – Present",
    status: "Current Role",
    isCurrent: true,
    summary:
      "I've moved into a full-time Associate Engineer role at eInfochips",
    details: ["Working on Typescript Node.js backend development for now."],
  },
  {
    id: "swe-intern",
    role: "Software Engineer Intern",
    company: "eInfochips (An Arrow Company)",
    logo: "/einfochips_logo.jpg",
    period: "Dec 2025 – Jun 2026 · 7 months",
    status: "Previous Role",
    isCurrent: false,
    summary:
      "At eInfochips, I worked as a Software Engineer Intern with a strong focus on backend development, training and building a solid foundation in enterprise-level technologies.",
    details: [
      "I trained in Java and the Spring ecosystem, including Spring, Spring Boot, Spring Cloud, and Microservices architecture, to design and develop scalable backend systems.",
      "As I transitioned into my internship project, I applied these technologies to real-world use cases, writing clean and maintainable code, and collaborating within an agile engineering team.",
      "This experience helped me strengthen my backend engineering skills, understand large-scale system design, and grow into a developer capable of delivering reliable and impactful software solutions.",
    ],
  },
];

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState({});

  const toggleExpanded = (id) =>
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));

  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  // GSAP scroll animations
  useGSAP(
    () => {
      // Header animation
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
          },
        );
      }

      // Timeline spine animation
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { opacity: 0, scaleY: 0 },
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Card animation with 3D effect, applied to each experience card
      const cards = gsap.utils.toArray(".exp-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            rotateX: -10,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );

        // Card content stagger
        const cardElements = card.querySelectorAll(".exp-animate");
        if (cardElements.length) {
          gsap.fromTo(
            cardElements,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="stack-section stack-section-2 min-h-screen py-24 bg-[#0a0a0b] border-y border-[#232323] relative flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9d4edd]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff5e8f]/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div ref={headerRef} className="mb-10 md:mb-14 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
              Work Experience
            </span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto text-sm md:text-base mt-4">
            A quick look at where I&apos;m applying my skills in a real-world
            engineering team.
          </p>
        </div>

        <div className="md:grid md:grid-cols-[auto,1fr] md:gap-8 items-start">
          <div className="flex flex-col gap-6">
            {EXPERIENCES.map((exp) => {
              const expanded = !!expandedIds[exp.id];
              return (
                <div
                  key={exp.id}
                  className="exp-card bg-[#151518]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 lg:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.55)] flex flex-col gap-5"
                  style={{ perspective: "1000px" }}>
                  <div className="exp-animate flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 md:w-16 md:h-16 rounded-xl overflow-hidden bg-[#111] border border-[#333] flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <p
                          className={
                            exp.isCurrent
                              ? "text-sm uppercase tracking-[0.22em] text-[#9d4edd] mb-1"
                              : "text-sm uppercase tracking-[0.22em] text-[#777] mb-1"
                          }>
                          {exp.status}
                        </p>
                        <h3 className="text-lg md:text-xl font-semibold text-[#f5f5f5]">
                          {exp.role}
                        </h3>
                        <p className="text-sm md:text-base text-[#c0c0c0]">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm md:text-base text-[#c0c0c0]">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181b] border border-[#27272f]">
                        <span
                          className={
                            exp.isCurrent
                              ? "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                              : "h-2 w-2 rounded-full bg-[#666]"
                          }
                        />
                        <span>{exp.period}</span>
                      </span>
                    </div>
                  </div>

                  <div className="exp-animate h-px bg-gradient-to-r from-transparent via-[#272727] to-transparent" />

                  <div className="exp-animate space-y-3 text-sm md:text-base text-[#d0d0d0]">
                    <p>{exp.summary}</p>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          key="expanded-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.36, ease: "easeOut" }}
                          className="overflow-hidden">
                          {exp.details.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="exp-animate flex justify-start">
                    <ButtonLink
                      label={expanded ? "Show less" : "Read more"}
                      variant="purple"
                      size="sm"
                      onClick={() => toggleExpanded(exp.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
