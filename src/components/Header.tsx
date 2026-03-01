import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Início', end: true as const },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/solucoes', label: 'Soluções' },
    { to: '/clientes', label: 'Clientes' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="relative flex items-center space-x-2"
            style={{ paddingLeft: 112, textDecoration: 'none' }}
            aria-label="Ir para Início"
          >
            <div
              className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 -translate-y-1/2"
              style={{ position: 'absolute', left: 0, top: '50%', zIndex: 1 }}
            >
              <img
                src="https://i.ibb.co/LW8H4Rd/Chat-GPT-Image-27-02-2026-08-28-49.png"
                alt="Logo SOSRESOLVE"
                className="w-full h-full"
                style={{ objectFit: 'contain' }}
                loading="eager"
                decoding="async"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                <span style={{ color: '#e53935' }}>SOS</span>{' '}
                <span style={{ color: '#1e3a8a' }}>RESOLVE</span>
              </h1>
              <p className="text-xs text-gray-600">Soluções Imobiliárias</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                style={({ isActive }) => ({
                  color: isActive ? '#2563eb' : undefined,
                  borderBottom: isActive ? '2px solid #2563eb' : '2px solid transparent',
                  paddingBottom: 6,
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+551932538006" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(19) 3253-8006</span>
            </a>
            <NavLink
              to="/contato"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
              style={{ textDecoration: 'none' }}
            >
              Entre em Contato
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                  style={({ isActive }) => ({
                    color: isActive ? '#2563eb' : undefined,
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+551932538006" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">(19) 3253-8006</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
