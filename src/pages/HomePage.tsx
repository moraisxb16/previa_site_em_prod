import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBanner } from '../components/TrustBanner';
import { About } from '../components/About';
import { ProcessSteps } from '../components/ProcessSteps';
import { Projects } from '../components/Projects';
import { VideoShowcase } from '../components/VideoShowcase';
import { Differentials } from '../components/Differentials';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
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
  );
}

