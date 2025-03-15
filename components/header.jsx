"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "https://drive.google.com/file/d/1UX0RTtAPboiFriyp60ZP-6Xe89AWUpLh/view?usp=sharing", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? "bg-[#121212]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
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
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  if(link.label !== "Resume"){
                    e.preventDefault(); // Prevent default anchor behavior
                    const section = document.querySelector(link.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                className="relative px-4 py-2 text-[#f0f0f0] hover:text-[#9d4edd] transition-colors rounded-md group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9d4edd] to-[#ff5e8f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </motion.li>
          ))}
          </ul>
        </nav>

        <div className="flex items-center md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full bg-[#2d2d2d] text-[#f0f0f0]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button className="p-2 text-[#f0f0f0]" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black md:hidden z-50" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-[#1a1a1a] shadow-xl p-6"
              style={{ backgroundColor: "#1a1a1a" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button onClick={toggleMenu} aria-label="Close menu">
                  <X size={24} className="text-[#f0f0f0]" />
                </button>
              </div>
              <ul className="mt-8 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="py-2"
                  >
                    <Link
                      href={link.href}
                      className="text-xl font-medium text-[#f0f0f0] hover:text-[#ff5e8f]"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
} 