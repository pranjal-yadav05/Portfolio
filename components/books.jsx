"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BookOpen, Sparkles, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BOOKS = [
  {
    id: 1,
    title: "Samkhya Karika",
    author: "Ishvarakrishna",
    status: "Currently Reading",
    statusColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    description: "A foundational text of the Samkhya school of Indian philosophy, outlining the dualism of Purusha (consciousness) and Prakriti (matter) and the path to liberation through knowledge.",
    image: "/book_samkhya_karika.png",
    spineColor: "#1e3a8a", // Deep indigo/blue spine
    spineTextColor: "#e0e7ff",
    height: "h-58",
    width: "w-6"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    status: "Currently Reading",
    statusColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    description: "A dystopian social science fiction novel and cautionary tale about totalitarianism using surveillance and propaganda to control people.",
    image: "/book_1984.png",
    spineColor: "#2c3e50",
    spineTextColor: "#ecf0f1",
    height: "h-64",
    width: "w-12"
  },
  {
    id: 3,
    title: "Animal Farm",
    author: "George Orwell",
    status: "Read",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description: "An allegorical novella about a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
    image: "/book_animal_farm.png",
    spineColor: "#c0392b", // Red spine
    spineTextColor: "#ecf0f1",
    height: "h-56",
    width: "w-5"
  },
  {
    id: 4,
    title: "Immortals of Meluha",
    author: "Amish Tripathi",
    status: "Read",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description: "The journey of Shiva in the land of Meluha, blending mythology with a gripping narrative about destiny and karma.",
    image: "/book_meluha.png",
    spineColor: "#d35400", // Orange/brown spine
    spineTextColor: "#ecf0f1",
    height: "h-60",
    width: "w-8"
  },
  {
    id: 5,
    title: "Annihilation of Caste",
    author: "Dr. B.R. Ambedkar",
    status: "Read",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    description: "A scholarly critique of the caste system in India, arguing that political reform without social reform is futile.",
    image: "/book_annihilation_of_caste.png",
    spineColor: "#8e44ad", // Deep purple spine
    spineTextColor: "#ecf0f1",
    height: "h-52",
    width: "w-14"
  },
  
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(BOOKS[0]);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const shelfRef = useRef(null);

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

    // Shelf entrance animation
    if (shelfRef.current) {
        gsap.fromTo(
            shelfRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: shelfRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        )
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="books"
      className="stack-section stack-section-6 min-h-screen py-24 bg-[#0a0a0b] relative flex items-center overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default">
            <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-medium text-white/70 tracking-widest uppercase">My Library</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40">
              The Reading Shelf
            </span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-lg leading-relaxed">
            A curated collection of thoughts, stories, and perspectives that have shaped my thinking.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center max-w-7xl mx-auto">
          
          {/* LEFT: Selected Book Details */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBook.id}
                initial={{ opacity: 0, x: -20, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: 20, rotateY: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-[#151518] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full"
              >
                  <div className="flex flex-col md:flex-row gap-6">
                      {/* Cover Image */}
                      <div className="relative w-32 md:w-40 shrink-0 aspect-[2/3] rounded-lg overflow-hidden shadow-lg border border-white/5 mx-auto md:mx-0">
                          <Image 
                            src={selectedBook.image}
                            alt={selectedBook.title}
                            fill
                            className="object-cover"
                          />
                      </div>
                      
                      {/* Details */}
                      <div className="flex flex-col justify-center text-center md:text-left">
                          <div className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border mb-3 font-bold w-fit mx-auto md:mx-0 ${selectedBook.statusColor}`}>
                            {selectedBook.status}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{selectedBook.title}</h3>
                          <p className="text-purple-400 font-medium italic mb-4">by {selectedBook.author}</p>
                          <p className="text-sm text-[#999] leading-relaxed line-clamp-4 md:line-clamp-none">
                              {selectedBook.description}
                          </p>
                      </div>
                  </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: The Shelf */}
          <div ref={shelfRef} className="w-full lg:w-1/2 flex justify-center lg:justify-start perspective-1000">
             <div className="relative border-b-8 border-[#333] w-full max-w-lg px-8 pb-0 pt-10 bg-gradient-to-b from-transparent to-black/20 rounded-b-sm shadow-xl flex items-end justify-center lg:justify-start gap-1 md:gap-2 min-h-[300px]">
                 
                 {BOOKS.map((book) => (
                     <motion.div
                        key={book.id}
                        layoutIds={`book-${book.id}`}
                        onClick={() => setSelectedBook(book)}
                        className={`relative cursor-pointer group flex items-center justify-center rounded-sm transition-all duration-300 origin-bottom hover:-translate-y-4 hover:z-10 ${book.height} ${book.width}`}
                        style={{ 
                            backgroundColor: book.spineColor,
                            color: book.spineTextColor,
                            boxShadow: "inset -2px 0 5px rgba(0,0,0,0.3), 2px 5px 10px rgba(0,0,0,0.3)"
                        }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ 
                            y: selectedBook.id === book.id ? -20 : 0,
                            scale: selectedBook.id === book.id ? 1.05 : 1,
                            zIndex: selectedBook.id === book.id ? 20 : 1
                         }}
                     >
                         {/* Book Spine content */}
                         <div className="h-full w-full flex flex-col items-center justify-between py-3 opacity-90 overflow-hidden">
                             <div className="w-full h-[0.5px] bg-current opacity-20" />
                             <span 
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-xs md:text-sm font-bold tracking-wider whitespace-nowrap leading-none"
                             >
                                 {book.title}
                             </span>
                             <div className="w-full h-[0.5px] bg-current opacity-20" />
                         </div>
                     </motion.div>
                 ))}
             </div>
          </div>

        </div>

        {/* Quote */}
        <div className="mt-24 text-center">
            <p className="text-[#444] text-xs font-mono tracking-widest uppercase">
              "History shows that where ethics and economics come in conflict, victory is always with economics."
            </p>
            <p className="text-[#444] text-xs font-mono tracking-widest uppercase">
              -Dr. B.R. Ambedkar
            </p>
        </div>

      </div>

      <style jsx global>{`
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
