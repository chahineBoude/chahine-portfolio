import { getExperience, getSkills } from "@/sanity/utils";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default async function Home() {
  const experience = await getExperience();
  const skills = await getSkills();

  return (
    <main>
      <div className="bg-background h-screen text-white snap-y lg:snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-scrollbar/70">
        <Header />
        <section id="Hero" className="md:snap-start">
          <Hero />
        </section>
        <section id="About" className="md:snap-end">
          <div className="mx-auto px-12 lg:px-[55px] z-10 w-full">
            <About />
          </div>
        </section>
        <section id="Experience" className="snap-center">
          <Experience experience={experience} />
        </section>
        <section id="Skills" className="md:snap-center">
          <Skills skills={skills} />
        </section>
      </div>
    </main>
  );
}
