"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Uncle Nomad",
    description:
"A fully functional booking platform for the Uncle Nomad travel community, enabling real users to seamlessly book stays and tours. Integrated a secure payment gateway and built a complete management system for independent operations.",    image: "/unclenomad.png",
    logo: "/face-logo.png",
    repo: "https://github.com/pranjal-yadav05/UncleNomad",
    demo: "https://unclenomad.in",
    tags: ["MERN","Razorpay","Cloudinary"],
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
    tags: ["MERN","PeerJS","Web Sockets"],
  },
  {
    id: 3,
    title: "SmartBlog",
    description:
      "SmartBlog is an AI-powered blogging platform that enables users to create blog posts effortlessly using the Gemini API, streamlining content generation with intelligent assistance.",
    image: "/smartblog.png",
    logo: "/smartblog-logo.png",
    repo: "https://github.com/pranjal-yadav05/SmartBlog",
    demo: null,
    tags: ["Spring Boot", "Next.js", "Gemini"],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
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
            repeatType: "reverse" 
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
            delay: 1 
          }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#ff5e8f]/10 to-transparent" 
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
              My Projects
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] rounded-full"></span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-[#2d2d2d] rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                  <h3 className="text-xl font-bold text-[#f0f0f0]">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-[#c0c0c0] mb-4 line-clamp-3">{project.description}</p>

                {/* Skill Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium text-[#f0f0f0] bg-[#3d3d3d] rounded-full"
                      >
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
                    whileHover={{ scale: 1.05 }}
                  >
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
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Demo</span>
                    </motion.a>
                  )}

                  {/* Arrow Button (GitHub link) */}
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff5e8f] hover:text-[#ff3d7f]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Bottom Hover Effect */}
              <motion.div 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]" 
              />
            </motion.div>
          ))}
        </div>



        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.a
            href="https://github.com/pranjal-yadav05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#2d2d2d] border border-[#9d4edd] text-[#f0f0f0] rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -5 }}
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
