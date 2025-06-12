"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add effect to handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Setup portal element
  useEffect(() => {
    // Create or get the portal element
    let element = document.getElementById("sidebar-portal");
    if (!element) {
      element = document.createElement("div");
      element.id = "sidebar-portal";
      document.body.appendChild(element);
    }
    setPortalElement(element);

    return () => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    {
      href: "https://drive.google.com/file/d/1M-VYVi8Z6ZNDPSNy0JpxGCsIXHo5YztB/view?usp=drivesdk",
      label: "Resume",
    },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 px-6 py-4 ${
        scrolled
          ? "bg-[#121212]/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f]">
            Pranjal Yadav
          </h3>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.label !== "Resume") {
                      e.preventDefault(); // Prevent default anchor behavior
                      const section = document.querySelector(link.href);
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  }}
                  className="relative px-4 py-2 text-[#f0f0f0] hover:text-[#9d4edd] transition-colors rounded-md group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            className="p-2 text-[#f0f0f0]"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu - rendered via portal */}
      {portalElement &&
        isOpen &&
        createPortal(
          <AnimatePresence>
            <div
              className="fixed inset-0 bg-[#121212] z-[9990]"
              key="bg-base"
            />
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9991]"
              key="bg-overlay"
            />

            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-[#121212] z-[9992]"
              style={{
                boxShadow: "-5px 0 25px rgba(0,0,0,0.15)",
                borderLeft: "1px solid #2d2d2d",
              }}>
              <div className="h-full flex flex-col bg-[#121212]">
                {/* Header */}
                <div className="flex justify-end p-6 border-b border-[#2d2d2d]">
                  <button
                    onClick={toggleMenu}
                    aria-label="Close menu"
                    className="p-2 hover:bg-[#2d2d2d] rounded-full transition-colors">
                    <X size={24} className="text-[#f0f0f0]" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6 bg-[#121212]">
                  <ul className="space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="border-b border-[#2d2d2d] last:border-0">
                        <Link
                          href={link.href}
                          className="block py-4 text-xl font-medium text-[#f0f0f0] hover:text-[#9d4edd] transition-colors"
                          onClick={toggleMenu}>
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </AnimatePresence>,
          portalElement
        )}
    </header>
  );
}
