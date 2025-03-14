"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Code, Lightbulb, GraduationCap, Rocket } from 'lucide-react';

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleExpanded = () => setExpanded(!expanded);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-[#1a1a1a] relative">
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
          repeatType: "reverse" 
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
          delay: 1 
        }}
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#9d4edd]/10 to-[#ff5e8f]/10 rounded-tr-full" 
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative text-[#f0f0f0]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
              About Me
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] rounded-full"></span>
          </h2>
          <p className="text-[#c0c0c0] max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full max-w-6xl">

            <motion.div variants={itemVariants} className="lg:col-span-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 20px 5px rgba(157, 78, 221, 0.2)", 
                      "0 0 30px 10px rgba(255, 94, 143, 0.2)", 
                      "0 0 20px 5px rgba(157, 78, 221, 0.2)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
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
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-3 w-full">
              <div className="bg-[#2d2d2d] rounded-xl shadow-lg p-8 w-full">
                <h3 className="text-2xl font-bold mb-4 text-[#f0f0f0]">
                  Hi there! 👋 I'm Pranjal
                </h3>

                <p className="text-[#c0c0c0] mb-6 leading-relaxed">
                  A passionate learner and programmer with a love for technology and innovation. Currently, I'm pursuing
                  my Bachelor's degree in Information Technology at Dharmsinh Desai University.
                </p>

                <motion.div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: expanded ? "1000px" : "0" }}
                >
                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    From a young age, I've been captivated by the endless possibilities that technology brings. Whether it's coding up a new project or exploring the latest advancements in the tech industry, I thrive on the excitement of learning and experimenting with new ideas. As a smart learner, I believe in the power of continuous growth and education.
                  </p>
                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    Every challenge I face is an opportunity to expand my knowledge and improve my skills. Whether it's mastering a new programming language or delving into complex algorithms, I'm always eager to push myself further and broaden my understanding of the digital landscape.
                  </p>
                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    Throughout my academic journey, I've had the privilege of working on a variety of exciting projects. From developing web applications to creating innovative software solutions, each project has been a chance to apply my skills in real-world scenarios and make a meaningful impact.
                  </p>
                  <p className="text-[#c0c0c0] leading-relaxed mb-4">
                    Outside of coding, you'll often find me exploring the latest tech trends, attending hackathons, or collaborating with fellow enthusiasts on passion projects. I'm a firm believer in the power of collaboration and community, and I'm always looking for opportunities to connect with like-minded individuals who share my passion for technology.
                  </p>
                  <p className="text-[#c0c0c0] leading-relaxed">
                    In essence, I'm a curious and driven individual who's passionate about leveraging technology to solve problems and make a positive difference in the world. I'm excited to see where this journey takes me next, and I can't wait to continue learning, growing, and pushing the boundaries of what's possible in the world of IT and beyond.
                  </p>
                </motion.div>

                <div className="flex justify-center">
                  <motion.button
                    onClick={toggleExpanded}
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] text-white rounded-full hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expanded ? "View Less" : "Know More"}
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
                {[
                  { icon: Code, label: "Programmer", color: "#9d4edd" },
                  { icon: Lightbulb, label: "Innovator", color: "#ff5e8f" },
                  { icon: GraduationCap, label: "Student", color: "#00d4ff" },
                  { icon: Rocket, label: "Explorer", color: "#9d4edd" },
                ].map(({ icon: Icon, label, color }, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-[#2d2d2d] p-4 rounded-lg shadow-md text-center"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="w-12 h-12 flex items-center justify-center mx-auto mb-3 rounded-full"
                      style={{ backgroundColor: `${color}20` }} // Light opacity
                    >
                      <Icon size={24} style={{ color: color }} />
                    </motion.div>
                    <h4 className="font-medium text-[#f0f0f0]">{label}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}