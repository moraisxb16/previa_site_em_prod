import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProcessSteps } from '../components/ProcessSteps';
import { Projects } from '../components/Projects';
import { VideoShowcase } from '../components/VideoShowcase';
import { Differentials } from '../components/Differentials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ProcessSteps />
      <Projects />
      <VideoShowcase />
      <Differentials />
      <Contact />
    </main>
  );
}

