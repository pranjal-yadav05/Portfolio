"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="stack-section stack-section-7 py-16 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
              Pranjal Yadav
            </h2>
            <p className="text-[#888] mb-4 max-w-md">
              Who the hell reads a footer?
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/pranjal-yadav05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <Github className="w-5 h-5 text-gray-400 hover:text-[#9d4edd]" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjalyadavhere/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#9d4edd]" />
              </a>
              <a
                href="https://twitter.com/PranjalYad69290"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#9d4edd]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#9d4edd] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Pranjal Yadav. All rights go to AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
