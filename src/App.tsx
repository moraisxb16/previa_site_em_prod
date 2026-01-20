import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TrustBanner } from './components/TrustBanner';
import { ProcessSteps } from './components/ProcessSteps';
import { VideoShowcase } from './components/VideoShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <About />
        <ProcessSteps />
        <Projects />
        <VideoShowcase />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}