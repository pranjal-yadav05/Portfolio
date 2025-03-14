"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Linkedin, Instagram, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/pranjalyadavhere/",
      color: "#0077B5",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/pranjal.ydv_/",
      color: "#E4405F",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com/PranjalYad69290",
      color: "#1DA1F2",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/pranjal-yadav05",
      color: "#333",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#121212] relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, transition: { duration: 0.6 } } : {}}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Pane - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f0f0f0]">
              Get In Touch
            </h2>
            <p className="text-[#c0c0c0] mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9d4edd] bg-opacity-20 mr-4">
                  <Mail size={20} className="text-[#9d4edd]" />
                </div>
                <div>
                  <h4 className="text-sm text-[#c0c0c0] mb-1">Email</h4>
                  <p className="text-[#f0f0f0]">yadavpranjal2105@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#ff5e8f] bg-opacity-20 mr-4">
                  <Phone size={20} className="text-[#ff5e8f]" />
                </div>
                <div>
                  <h4 className="text-sm text-[#c0c0c0] mb-1">Phone</h4>
                  <p className="text-[#f0f0f0]">+91 99255 52723</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#00d4ff] bg-opacity-20 mr-4">
                  <MapPin size={20} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="text-sm text-[#c0c0c0] mb-1">Location</h4>
                  <p className="text-[#f0f0f0]">Gujarat, India</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-[#f0f0f0]">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: link.color }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Pane - GIF */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }} 
            className="flex justify-center"
          >
            <Image 
              src="/contact-me.gif" // Replace with your actual GIF path
              alt="Animated Preview"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
