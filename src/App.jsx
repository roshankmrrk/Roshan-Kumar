import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import { Education } from "./components/Education";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased scroll-smooth">
      {/* Background grid and gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] mx-auto rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />

        {/* 👇 Sections with smooth scroll IDs */}
        <section id="home" className="pt-24">
          <Hero />
        </section>

        <section id="education" >
          <Education />
        </section>

        <section id="skills" >
          <Technologies />
        </section>

        <section id="projects" >
          <Projects />
        </section>

        <section id="testimonials" >
          <Testimonials />
        </section>

        <section id="contact" className=" pb-8">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
