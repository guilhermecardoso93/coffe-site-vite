import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
