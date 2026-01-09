"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Lightbulb, GraduationCap, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const toggleExpanded = () => setExpanded(!expanded);

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

    // Image and content entrance
    if (imageRef.current && contentRef.current) {
      gsap.fromTo(
        [imageRef.current, contentRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="stack-section stack-section-5 min-h-screen py-20 bg-[#1a1a1a] relative flex items-center">
      {/* Background decorations */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9d4edd]/10 to-[#ff5e8f]/10 rounded-bl-full"
      />
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#9d4edd]/10 to-[#ff5e8f]/10 rounded-tr-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-[#f0f0f0]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-300">
              About Me
            </span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto">
            Who the hell am I?
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full max-w-6xl">
            <div
              ref={imageRef}
              className="lg:col-span-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px 5px rgba(157, 78, 221, 0.2)",
                      "0 0 30px 10px rgba(255, 94, 143, 0.2)",
                      "0 0 20px 5px rgba(157, 78, 221, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute -inset-4 rounded-lg opacity-70"
                />
                <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/coding.gif"
                    alt="Pranjal Yadav"
                    width={320}
                    height={320}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>

            <div
              ref={contentRef}
              className="lg:col-span-3 w-full">
              <div className="bg-[#2d2d2d] rounded-xl shadow-lg p-8 w-full">
                <h3 className="text-2xl font-bold mb-4 text-[#f0f0f0]">
                  Hi there! 👋 I'm Pranjal
                </h3>

                <p className="text-[#c0c0c0] mb-6 leading-relaxed">
                  This is not AI slop. This is me. I tend to be many things at
                  once, and as time goes on, I often lose interest in my
                  interests and jump between them - sometimes unexpectedly.
                </p>

                <motion.div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: expanded ? "1000px" : "0" }}>
                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    One day I might be an atheist, and the next I’m listening to
                    Damodar Ashtakam in absolute bliss. People don’t stay the
                    same for long - and neither do I. I’ve grown comfortable
                    with that contradiction.
                  </p>

                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    What *does* stay constant, though, is my love for music and
                    art. I’ve been exploring different kinds of music for years
                    now, and I picked up the guitar about two years ago. Lately,
                    I’ve hit that familiar learning plateau and find myself
                    thinking about fingerstyle, electric guitars, and leaning
                    more into rock.
                  </p>

                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    I also write - quietly. I post blogs somewhere on the
                    internet 🙊, not really meant to be discovered. Writing
                    helps me process emotions, thoughts, and the strange phases
                    that life keeps throwing my way.
                  </p>

                  <p className="text-[#c0c0c0] leading-relaxed">
                    I’m not very social, but if I know you, I’ll definitely
                    wave. This space is just a small window into how I think,
                    feel, and occasionally overthink.
                  </p>
                </motion.div>

                <div className="flex justify-center">
                  <motion.button
                    onClick={toggleExpanded}
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-sky-500 to-emerald-400 text-white rounded-full hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    {expanded ? "View Less" : "Know More"}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

