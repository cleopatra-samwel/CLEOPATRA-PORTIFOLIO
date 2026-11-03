import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* wrapper only adds the section divider; About itself is untouched */}
        <div className="border-t border-[var(--color-line)]">
          <About />
        </div>
        <Projects />
        <Skills />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
