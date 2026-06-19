import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Principles from '@/components/Principles/Principles';
import Services from '@/components/Services/Services';
import FAQ from '@/components/FAQ/FAQ';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Principles />
        <Services />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
