import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  /*   const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
  }); */
  return (
    <main>
      <div className="bg-background h-screen text-white lg:snap-y lg:snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scroll-smooth">
        <Header />
        <section id="Hero" className="snap-start">
          <Hero />
        </section>
        <section id="About" className="snap-end">
          <div className="mx-auto px-12 lg:px-[55px] z-10 w-full">
            <About />
          </div>
        </section>
        <section id="Experience" className="snap-center">
          <Experience />
        </section>
      </div>
    </main>
  );
}
