"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Uncle Nomad",
    description:
      "A fully functional booking platform for the Uncle Nomad travel community, enabling real users to seamlessly book stays and tours. Integrated a secure payment gateway and built a complete management system for independent operations.",
    image: "/unclenomad.png",
    logo: "/face-logo.png",
    repo: "https://github.com/pranjal-yadav05/UncleNomad",
    demo: "https://unclenomad.in",
    tags: ["MERN", "Razorpay", "Cloudinary"],
  },
  {
    id: 2,
    title: "Lyceum",
    description:
      "A virtual community where students can connect, collaborate, and study together through interactive video rooms, discussion forums, and real-time messaging.",
    image: "/lyceum.png",
    logo: "/lyceum-logo.png",
    repo: "https://github.com/pranjal-yadav05/Lyceum",
    demo: "https://lyceum.vercel.app",
    tags: ["MERN", "PeerJS", "Web Sockets"],
  },
  {
    id: 3,
    title: "SmartBlog",
    description:
      "SmartBlog is an AI-powered blogging platform that enables users to create blog posts effortlessly using the Gemini API, streamlining content generation with intelligent assistance.",
    image: "/smartblog.png",
    logo: "/smartblog-logo.png",
    repo: "https://github.com/pranjal-yadav05/SmartBlog",
    demo: "https://smart-blog-one.vercel.app",
    tags: ["Spring Boot", "Next.js", "Gemini"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

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

    // Projects cards entrance
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="projects"
      className="stack-section stack-section-4 min-h-screen py-24 bg-[#0a0a0b] border-y border-[#232323] relative overflow-hidden flex items-center">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#9d4edd]/10 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#ff5e8f]/10 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
          className="mb-10 md:mb-14 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
              Projects
            </span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto text-sm md:text-base mt-4">
            Some things I’ve built (and broken) along the way
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-[#151518]/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 relative">
              {/* Project Image */}
              <div
                onClick={() => window.open(project.demo, "_blank")}
                className="relative overflow-hidden h-48 cursor-pointer">
                <iframe
                  src={project.demo}
                  className="w-full h-48 border-none"
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title + Logo */}
                <div className="flex items-center mb-2">
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={30}
                      height={30}
                      className="mr-2 rounded-full"
                    />
                  )}
                  <h3 className="text-xl font-bold text-[#f0f0f0]">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#c0c0c0] mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Skill Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium text-[#f0f0f0] bg-[#3d3d3d] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons: Repo & Demo */}
                <div className="flex justify-between items-center">
                  {/* GitHub Repo */}
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#9d4edd] hover:text-[#8a3dcb] transition-colors"
                    whileHover={{ scale: 1.05 }}>
                    <Github size={18} className="mr-1" />
                    <span>Repo</span>
                  </motion.a>

                  {/* Demo Link (if available) */}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#9d4edd] hover:text-[#8a3dcb] transition-colors"
                      whileHover={{ scale: 1.05 }}>
                      <ExternalLink size={18} className="mr-1" />
                      <span>Visit</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Bottom Hover Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/pranjal-yadav05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#3d3d3d] hover:bg-[#4d4d4d] text-[#f0f0f0] rounded-full transition-all duration-300 hover:shadow-lg group">
            <span>View More on GitHub</span>
            <ArrowRight
              size={16}
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

