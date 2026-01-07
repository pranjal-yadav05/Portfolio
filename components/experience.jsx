"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-[#0f0f10] border-y border-[#232323] relative flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9d4edd]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff5e8f]/30 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          variants={itemVariants}
          className="mb-10 md:mb-14 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-3 text-[#f0f0f0]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-300">
              Work Experience
            </span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto text-sm md:text-base mt-4">
            A quick look at where I&apos;m applying my skills in a real-world
            engineering team.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:grid md:grid-cols-[auto,1fr] md:gap-8 items-start">
          {/* Timeline spine on desktop */}
          <div className="hidden md:flex flex-col items-center pt-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            <div className="w-px flex-1 bg-gradient-to-b from-emerald-400/60 via-emerald-400/10 to-transparent" />
          </div>

          <div className="bg-[#151515] border border-[#272727] rounded-2xl p-5 md:p-6 lg:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.55)] flex flex-col gap-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 md:w-16 md:h-16 rounded-xl overflow-hidden bg-[#111] border border-[#333] flex-shrink-0">
                  <Image
                    src="/einfochips_logo.jpg"
                    alt="eInfochips (An Arrow Company)"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#9d4edd] mb-1">
                    Current Role
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-[#f5f5f5]">
                    Software Engineer Intern
                  </h3>
                  <p className="text-sm md:text-base text-[#c0c0c0]">
                    eInfochips (An Arrow Company)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm md:text-base text-[#c0c0c0]">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181b] border border-[#27272f]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  <span>Dec 2025 – Present</span>
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#272727] to-transparent" />

            <div className="space-y-3 text-sm md:text-base text-[#d0d0d0]">
              <p>
                At eInfochips, I&apos;m working as a Software Engineer Intern
                with a strong focus on backend development, training and
                building a solid foundation in enterprise-level technologies.
              </p>
              {expanded && (
                <>
                  <p>
                    I am currently training in Java and the Spring ecosystem,
                    including Spring, Spring Boot, Spring Cloud, and
                    Microservices architecture, to design and develop scalable
                    backend systems.
                  </p>
                  <p>
                    As I transition into my internship project, I will be
                    applying these technologies to real-world use cases, writing
                    clean and maintainable code, and collaborating within an
                    agile engineering team.
                  </p>
                  <p>
                    This experience is helping me strengthen my backend
                    engineering skills, understand large-scale system design,
                    and grow into a developer capable of delivering reliable and
                    impactful software solutions.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base bg-[#1f1f26] border border-[#3b3b4a] text-[#f5f5f5] hover:border-[#9d4edd] hover:bg-[#21142f] transition-colors">
                <span>{expanded ? "Show less" : "Read more"}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
