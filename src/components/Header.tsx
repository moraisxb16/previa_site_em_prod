import { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const navItems = useMemo(
    () => [
      { id: 'inicio', label: 'Início' },
      { id: 'sobre', label: 'Sobre' },
      { id: 'empreendimentos', label: 'Empreendimentos' },
      { id: 'diferenciais', label: 'Diferenciais' },
      { id: 'contato', label: 'Contato' },
    ],
    [],
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Scroll: "scrolled" state + active section tracking (throttled via rAF)
  useEffect(() => {
    const getActiveSection = () => {
      const offset = 140; // header height + breathing room
      const probe = window.scrollY + offset;

      let current = navItems[0]?.id ?? 'inicio';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.offsetTop <= probe) current = item.id;
      }
      return current;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        setIsScrolled(window.scrollY > 40);
        setActiveSection(getActiveSection());
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [navItems]);

  // Mobile: lock body scroll + focus management
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    closeButtonRef.current?.focus();

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [isMobileMenuOpen]);

  // Mobile: close on ESC
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  const NavLink = ({
    id,
    label,
    isActive,
    className = '',
  }: {
    id: string;
    label: string;
    isActive: boolean;
    className?: string;
  }) => {
    return (
      <button
        type="button"
        onClick={() => scrollToSection(id)}
        aria-current={isActive ? 'page' : undefined}
        className={[
          'group relative inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          isActive ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900',
          className,
        ].join(' ')}
      >
        <span className="relative">
          <span className={isActive ? 'font-semibold' : undefined}>{label}</span>
          {/* Underline (hover) */}
          <span
            aria-hidden="true"
            className={[
              'pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-blue-600 to-blue-800',
              'scale-x-0 transition-transform duration-200 group-hover:scale-x-100',
              isActive ? 'scale-x-100' : '',
            ].join(' ')}
          />
        </span>

        {/* Active indicator dot */}
        <span
          aria-hidden="true"
          className={[
            'ml-2 h-1.5 w-1.5 rounded-full bg-blue-600 transition-opacity duration-200',
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40',
          ].join(' ')}
        />
      </button>
    );
  };

  return (
    <>
      {/* Mobile overlay + panel */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay (click outside to close) */}
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute left-1/2 top-3 w-[min(560px,calc(100%-1.5rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              {/* Brand (visual only) */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-600/30 to-blue-800/30 blur opacity-70" />
                  <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="text-base font-bold text-gray-900">Construtora Elite</div>
                  <div className="text-xs text-gray-600">Construindo Sonhos</div>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-2 pb-2 sm:px-3">
              <div className="rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-col py-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      isActive={activeSection === item.id}
                      className="w-full justify-start px-4 py-3 text-base"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 px-1 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="tel:+5511999999999"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition-all duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>(11) 99999-9999</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('contato')}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}

      <header
        className={[
          'sticky top-0 z-50 w-full transition-all duration-300',
          'border-b',
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border-white/30 shadow-lg'
            : 'bg-white border-gray-100/70 shadow-sm',
        ].join(' ')}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className={['flex items-center justify-between', isScrolled ? 'py-4' : 'py-5'].join(' ')}>
            {/* Logo */}
            <div className="group flex items-center gap-3 select-none">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-600/35 to-blue-800/35 blur opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.03]">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-base sm:text-lg font-bold text-gray-900">Construtora Elite</h1>
                <p className="text-xs text-gray-600">Construindo Sonhos</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                />
              ))}
            </nav>

            {/* Contact Info - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+5511999999999"
                className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold">(11) 99999-9999</span>
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0"
              >
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
