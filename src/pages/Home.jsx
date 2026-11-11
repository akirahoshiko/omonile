import Hero from '../sections/Hero';
import Work from '../sections/Work';
import About from '../sections/About';
import Services from '../sections/Services';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <Services />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
