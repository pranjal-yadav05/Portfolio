"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Code, Zap, ChevronDown } from "lucide-react";
import NowPlaying from "./nowplaying";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeInterest, setActiveInterest] = useState(null);
  const router = useRouter();
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const roleRef = useRef(null);
  const interestsRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);
  const imageRef = useRef(null);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP scroll animations
  useGSAP(() => {
    const elements = [
      subtitleRef.current,
      headingRef.current,
      roleRef.current,
      interestsRef.current,
      descriptionRef.current,
      buttonsRef.current,
      socialsRef.current,
    ].filter(Boolean);

    // Initial stagger animation on load
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: isMobile ? 30 : 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.6 : 0.8,
        stagger: isMobile ? 0.1 : 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    // Image reveal animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotateY: -15,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Parallax effect on scroll (desktop only)
    if (!isMobile && heroRef.current) {
      gsap.to(heroRef.current.querySelector('.hero-content'), {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out hero on scroll
      gsap.to(heroRef.current, {
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Interest boxes stagger animation on hover area
    const interestBoxes = interestsRef.current?.querySelectorAll('.interest-box');
    if (interestBoxes?.length) {
      interestBoxes.forEach((box, index) => {
        gsap.fromTo(
          box,
          { opacity: 0, x: -20, rotateZ: -2 },
          {
            opacity: 1,
            x: 0,
            rotateZ: 0,
            duration: 0.5,
            delay: 0.8 + index * 0.1,
            ease: "back.out(1.7)",
          }
        );
      });
    }
  }, { scope: heroRef, dependencies: [isMobile] });

  // Animation variants for staggered animations - simplified for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.4 : 0.6 },
    },
  };

  const traitDescriptions = {
    Guitarist:
      "I can comfortably play open chords and barre chords, and I'm currently learning finger-style to add more dynamics and melody to my playing.",
    "Music Enthusiast":
      "I enjoy discovering different kinds of music—from alternative rock (currently obsessed with Arctic Monkeys) to hip-hop (Kanye West), R&B (The Weeknd, Michael Jackson), and even tracks I can't quite label but still love.",
    Sketcher:
      "I enjoy sketching characters and scenes in my free time—it helps me think visually and translate ideas into shapes, lines, and stories.",
    "Someone Who Enjoys Philosophy":
      "I like reading and reflecting on philosophy, especially around consciousness, meaning, and how we make decisions in a complex world.",
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="stack-section stack-section-1 min-h-screen flex flex-col items-center justify-center py-16 relative overflow-hidden">
      {/* Gradient background with animated noise texture */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] to-[#121212]" />

      {/* Conditionally render simplified background animations for mobile */}
      {!isMobile && (
        <div className="absolute inset-0 -z-5 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.15 }}
            animate={{
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0.15 }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              scale: [1.1, 1.4, 1.1],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"
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
              delay: 5,
            }}
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl"
          />
        </div>
      )}

      {/* For mobile, use a static gradient background instead of animations */}
      {isMobile && (
        <div className="absolute inset-0 -z-5 bg-gradient-radial from-[#9d4edd]/5 via-transparent to-transparent opacity-50" />
      )}

      <div className="container mx-auto px-4 flex items-center justify-center w-full hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl">
          <div className="flex-1 text-center lg:text-left">
            <div ref={subtitleRef}>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm md:text-base text-[#9ca3af]">
                <div className="h-px w-8 bg-sky-500/50 rounded-full" />
                <span className="uppercase tracking-[0.18em] text-white/70">Hello, I'm</span>
                <div className="h-px w-8 bg-sky-500/50 rounded-full" />
              </div>
            </div>

            <h1
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
                Pranjal Yadav
              </span>
            </h1>

            {isMobile && (
              <div className="flex justify-center">
                <motion.div
                  animate={{}}
                  transition={{}}
                  className="
                    relative
                    w-64
                    rounded-2xl
                    overflow-hidden
                    border-2 border-[#2d2d2d]
                    m-10
                    shadow-xl
                  ">
                  <div className="relative w-64 h-64 overflow-hidden">
                    <Image
                      src="/photo.jpg"
                      alt="Pranjal Yadav"
                      fill
                      className="object-cover"
                      priority
                    />

                    <div className="absolute bottom-0 left-0 w-full">
                      <NowPlaying />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Primary role in a "terminal" style line */}
            <div
              ref={roleRef}
              className="mb-5 hero-stagger flex items-center justify-center lg:justify-start text-base md:text-lg font-mono text-[#e5e5e5]">
              <span className="mr-2 text-sky-400">$</span>
              <span className="opacity-80">I'm a</span>
              <span className="ml-2 px-3 py-1 rounded-md bg-[#0b1120] border border-[#1f2937] text-sky-300 shadow-[0_0_10px_rgba(15,23,42,0.65)]">
                Developer
              </span>
            </div>

            <div
              ref={interestsRef}
              className="relative mb-8 hero-stagger">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 text-[#c0c0c0]">
                <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#9ca3af]">
                  Also a
                </span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {[
                  {
                    label: "Guitarist",
                    emoji: "🎸",
                  },
                  {
                    label: "Music Enthusiast",
                    emoji: "🎧",
                  },
                  {
                    label: "Sketcher",
                    emoji: "✏️",
                  },
                  {
                    label: "Someone Who Enjoys Philosophy",
                    emoji: "🧠",
                  },
                ].map((item, idx) => (
                  <motion.button
                    type="button"
                    key={idx}
                    onClick={() => {
                      if (isMobile) {
                        setActiveInterest(activeInterest === idx ? null : idx);
                      }
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className={`interest-box group relative inline-flex flex-col items-start gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium border border-[#1f2937] bg-[#111827] text-[#e5e7eb] shadow-[0_0_0_0_rgba(56,189,248,0)] hover:shadow-[0_0_18px_0_rgba(56,189,248,0.55)] cursor-pointer hover:border-sky-500/80 hover:bg-[#0f172a] transition-all duration-200 z-10 ${activeInterest === idx ? 'border-sky-500/80 bg-[#0f172a] shadow-[0_0_18px_0_rgba(56,189,248,0.55)]' : ''}`}>
                    <div className="flex items-center justify-between gap-2 w-full">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="text-base md:text-lg">{item.emoji}</span>
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown 
                        size={14} 
                        className={`text-sky-400/70 transition-transform duration-300 ${
                          isMobile 
                            ? (activeInterest === idx ? 'rotate-180' : 'rotate-0') 
                            : 'group-hover:rotate-180'
                        }`} 
                      />
                    </div>
                    <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${isMobile ? (activeInterest === idx ? 'max-h-32' : 'max-h-0') : 'group-hover:max-h-32'}`}>
                      <div className="pt-2 border-t border-[#1f2937]">
                        <p className="text-[10px] md:text-xs text-[#9ca3af] leading-relaxed max-w-[280px] text-left">
                          {traitDescriptions[item.label]}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* <motion.div variants={itemVariants} className="relative mb-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-2xl md:text-3xl font-bold">
                <span className="text-[#c0c0c0]">I'm a</span>
                <div className="h-10 overflow-hidden">
                  <motion.div
                    animate={{
                      y: [0, -40, -80, -120, -160, -120, -80, -40, 0],
                    }}
                    transition={{
                      duration: isMobile ? 10 : 8, // Slower on mobile
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-start gap-2">
                    <span className="text-[#9d4edd] h-10 flex items-center">
                      Developer
                    </span>
                    <span className="text-[#ff5e8f] h-10 flex items-center">
                      Guitarist
                    </span>
                    <span className="text-[#00d4ff] h-10 flex items-center">
                      Student
                    </span>
                    <span className="text-[#9d4edd] h-10 flex items-center">
                      Explorer
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div> */}

            <p
              ref={descriptionRef}
              className="text-lg md:text-xl text-[#9ca3af] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Turning innovative ideas into{" "}
              <span className="font-semibold text-[#e5e7eb]">
                impactful solutions
              </span>{" "}
              through a semiconductor.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-lg transition-all"
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(157, 78, 221, 0.25)",
                      }
                    : {}
                }
                whileTap={{ scale: 0.95 }}>
                <span className="flex items-center gap-2">
                  <Code size={18} />
                  <span>View Projects</span>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#020617] border border-[#1f2937] text-[#e5e7eb] rounded-lg shadow-lg transition-all"
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(10, 10, 10, 0.3)",
                      }
                    : {}
                }
                whileTap={{ scale: 0.95 }}>
                <span className="flex items-center gap-2">
                  <Zap size={18} />
                  <span>Connect With Me</span>
                </span>
              </motion.a>
            </div>

            <div ref={socialsRef}>
              <div className="flex justify-center lg:justify-start space-x-5">
                {[
                  {
                    href: "https://github.com/pranjal-yadav05",
                    icon: Github,
                    label: "GitHub",
                    color: "bg-[#020617] hover:bg-[#020617]/90",
                    shadowColor: "rgba(15, 23, 42, 0.6)",
                  },
                  {
                    href: "https://www.linkedin.com/in/pranjalyadavhere/",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "bg-[#020617] hover:bg-[#020617]/90",
                    shadowColor: "rgba(15, 23, 42, 0.6)",
                  },
                  {
                    href: "https://twitter.com/PranjalYad69290",
                    icon: Twitter,
                    label: "Twitter",
                    color: "bg-[#020617] hover:bg-[#020617]/90",
                    shadowColor: "rgba(15, 23, 42, 0.6)",
                  },
                ].map(
                  ({ href, icon: Icon, label, color, shadowColor }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 ${color} rounded-lg text-white transition-all flex items-center gap-2`}
                      whileHover={
                        !isMobile
                          ? {
                              y: -5,
                              boxShadow: `0 10px 15px -3px ${shadowColor}`,
                            }
                          : {}
                      }
                      whileTap={{ scale: 0.9 }}>
                      <Icon size={22} />
                      <span className="hidden md:inline">{label}</span>
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center mt-8 lg:mt-0">
            {/* Simple non-animated border for mobile, animated frame for desktop */}
            {isMobile ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-2xl border-2 border-[#9d4edd]/30"></div>
              </div>
            ) : (
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="450"
                  height="450"
                  viewBox="0 0 100 100"
                  fill="none"
                  className="absolute">
                  <polygon
                    points="50,5 65,35 95,50 65,65 50,95 35,65 5,50 35,35"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}

            {/* Simplified shadow effect for mobile */}
            {!isMobile && (
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 25px 8px rgba(56, 189, 248, 0.35)",
                    "0 0 35px 12px rgba(52, 211, 153, 0.35)",
                    "0 0 25px 8px rgba(56, 189, 248, 0.35)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 rounded-2xl opacity-70 flex items-center justify-center"
              />
            )}

            {/* Simplified floating animation for mobile */}
            {!isMobile && (
              <motion.div
                ref={imageRef}
                animate={
                  !isMobile
                    ? {
                        y: [0, -10, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative rounded-2xl overflow-hidden border-2 border-[#2d2d2d] shadow-xl">
                {/* Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                  <Image
                    src="/photo.jpg"
                    alt="Pranjal Yadav"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Now Playing — pinned to bottom */}
                  <div className="absolute bottom-0 left-0 w-full">
                    <NowPlaying />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-[#c0c0c0] mb-2">Explore More</span>
        <motion.div
          animate={!isMobile ? { y: [0, 10, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-3 rounded-full bg-[#1a1a1a] border border-[#9d4edd]/30 hover:border-[#9d4edd] cursor-pointer transition-all">
          <ArrowDown
            onClick={() => {
              const section = document.querySelector("#about");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            size={20}
            className="text-[#9d4edd]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
