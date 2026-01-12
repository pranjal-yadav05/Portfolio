"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Book, Library, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BOOKS = [
  {
    title: "1984",
    author: "George Orwell",
    status: "Currently Reading",
    statusColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    description: "A dystopian social science fiction novel and cautionary tale about totalitarianism.",
    image: "/book_1984.png",
    rotation: -6,
    xOffset: -40,
    yOffset: 0,
    delay: 0,
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    status: "Read",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description: "An allegorical novella about a group of farm animals who rebel against their human farmer.",
    image: "/book_animal_farm.png",
    rotation: 4,
    xOffset: 0,
    yOffset: -20,
    delay: 0.1,
  },
  {
    title: "Immortals of Meluha",
    author: "Amish Tripathi",
    status: "Read",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description: "The journey of Shiva in Meluha, blending mythology with a gripping narrative.",
    image: "/book_meluha.png",
    rotation: -3,
    xOffset: 40,
    yOffset: 10,
    delay: 0.2,
  },
];

export default function Books() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const booksContainerRef = useRef(null);

  useGSAP(() => {
    // Header animation
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

    // Books staggered appearance
    const bookElements = booksContainerRef.current?.querySelectorAll('.book-item');
    if (bookElements) {
      gsap.fromTo(
        bookElements,
        { opacity: 0, scale: 0.8, y: 100, rotateY: 45 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: booksContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="books"
      className="stack-section stack-section-6 min-h-screen py-24 bg-[#0a0a0b] relative flex items-center overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default">
            <Sparkles className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-medium text-white/70 tracking-widest uppercase">Literary Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
              The Reading Shelf
            </span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg leading-relaxed">
            This is a small section of books I've read and currently reading.
          </p>
        </div>

        <div 
          ref={booksContainerRef}
          className="relative flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-7xl mx-auto perspective-1000">
          
          {BOOKS.map((book, index) => (
            <motion.div
              key={index}
              className="book-item relative group w-full max-w-[280px]"
              initial={{ rotate: book.rotation, x: book.xOffset, y: book.yOffset }}
              whileHover={{ 
                rotate: 0, 
                x: 0, 
                y: -30, 
                scale: 1.1,
                zIndex: 50,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Shadow effect */}
              <div className="absolute inset-x-4 -bottom-6 h-4 bg-black/40 blur-xl rounded-full scale-x-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Book Card */}
              <div className="relative aspect-[3/4.5] bg-[#151518] rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-sky-500/30 group-hover:shadow-sky-500/10">
                
                {/* Book Cover Image */}
                <div className="relative h-full w-full">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className={`text-[10px] w-fit uppercase tracking-widest px-2 py-0.5 rounded-full border mb-3 font-bold ${book.statusColor}`}>
                      {book.status}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-sm text-sky-400 font-medium italic mb-2">
                      by {book.author}
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>
                  </div>

                  {/* Glass indicator (top right) when not hovered */}
                  <div className="absolute top-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 whitespace-nowrap">
                     <span className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded-md border backdrop-blur-md bg-black/40 ${book.statusColor}`}>
                       {book.status === "Currently Reading" ? "Reading" : "Finished"}
                     </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic quote or explorer note */}
        <div className="mt-32 flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-sky-500/50 to-transparent mb-8" />
            <p className="text-[#555] text-sm font-medium tracking-widest uppercase italic max-w-lg text-center leading-relaxed">
              "Philosophy doesn't change the world, but it can change the way you see it."
            </p>
            <Library className="mt-6 w-8 h-8 text-white/10" />
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
