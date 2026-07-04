"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ButtonLink from "./ui/button-link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Signature from "./signature"; // adjust path as needed

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/pranjalyadavhere/",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/pranjal.ydv_/",
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/PranjalYad69290",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/pranjal-yadav05",
    },
  ];

  useGSAP(
    () => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="stack-section stack-section-contact min-h-screen py-24 bg-[#0a0a0b] border-y border-[#232323] relative overflow-hidden flex items-center">
      <div ref={contentRef} className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Pane — Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
                Get In Touch
              </span>
            </h2>
            <p className="text-[#888] mb-8">
              Feel free to reach out — for collaborations, opportunities, or
              accidental deep conversations
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

            <h4 className="text-lg font-semibold mb-4 text-[#f0f0f0]">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <ButtonLink
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  label={link.name}
                  icon={link.icon}
                  variant="outline"
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Right Pane — Animated Signature */}
          <div className="flex justify-center items-center">
            <div className="text-white opacity-90">
              <Signature />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
