import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-md py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Construsato</h1>
              <p className="text-xs text-gray-600">Regularização Imobiliária</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('solucoes')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Soluções
            </button>
            <button onClick={() => scrollToSection('clientes')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Clientes
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contato
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+551122615976" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(11) 2261-5976</span>
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
            >
              Entre em Contato
            </button>
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
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('solucoes')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Soluções
              </button>
              <button onClick={() => scrollToSection('clientes')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Clientes
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Contato
              </button>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+551122615976" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">(11) 2261-5976</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
