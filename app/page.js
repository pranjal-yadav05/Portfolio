import Hero from "@/components/hero";
import Experience from "@/components/experience";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Books from "@/components/books";
import Footer from "@/components/footer";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Books />
      <Contact />
      <Footer />
    </main>
  );
}

