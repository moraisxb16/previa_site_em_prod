import React from 'react';
import { Projects } from '../components/Projects';
import { VideoShowcase } from '../components/VideoShowcase';
import { Differentials } from '../components/Differentials';

export function SolucoesPage() {
  return (
    <main>
      <Projects />
      <VideoShowcase />
      <Differentials />
    </main>
  );
}

