import React, { useEffect } from 'react';
import { Contact } from '../components/Contact';
import { useLocation } from 'react-router-dom';

export function ContatoPage() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (!state?.scrollTo) return;
    const el = document.getElementById(state.scrollTo);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.state]);

  return (
    <main>
      <Contact />
    </main>
  );
}

