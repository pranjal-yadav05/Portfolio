import SmoothScroll from "@/components/smooth-scroll";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Books from "@/components/books";
import Footer from "@/components/footer";

import BlurStack from "@/components/ui/blur-stack";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Books />
        <Contact />
        <Footer />

        {/* Bottom blur overlay */}
        <BlurStack className="pointer-events-none fixed bottom-0 left-0 right-0 h-40 z-50" />
      </main>
    </SmoothScroll>
  );
}