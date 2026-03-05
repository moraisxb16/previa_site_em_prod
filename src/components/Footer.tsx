import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center gap-2">
                <div
                  className="rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(96px, 7.5vw, 150px)',
                    height: 'clamp(96px, 7.5vw, 150px)',
                  }}
                >
                  <img
                    src="https://i.ibb.co/LW8H4Rd/Chat-GPT-Image-27-02-2026-08-28-49.png"
                    alt="Logo SOS RESOLVE"
                    className="w-full h-full"
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: 'clamp(1.35rem, 1.55vw, 2rem)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <span style={{ color: '#e53935' }}>SOS</span>{' '}
                    <span style={{ color: '#1e3a8a' }}>RESOLVE</span>
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: 'clamp(0.9rem, 0.95vw, 1.05rem)',
                      marginTop: 6,
                    }}
                  >
                    Soluções Imobiliárias
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Há mais de 20 anos guiando você para resultados seguros em regularização imobiliária. Expanda seu negócio com segurança.
            </p>
            <a
              href="https://instagram.com/sosresolve.si"
              className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
              aria-label="Abrir Instagram SOS RESOLVE"
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-pink-400" />
              </span>
              <span className="text-sm font-medium">@sosresolve.si</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="/solucoes#usucapiao" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Usucapião
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Aprovações de Projetos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AVCB
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Compliance Imobiliário
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Rua Santa Cruz, 469 - Cambuí<br />
                  Campinas - SP<br />
                  CEP: 13024-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <a href="tel:+551932538006" className="text-gray-400 hover:text-white transition-colors text-sm">
                  (19) 3253-8006
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true" style={{ color: '#22c55e' }}>
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .12 5.35.12 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.65a11.9 11.9 0 0 0 5.8 1.48h.01c6.59 0 11.94-5.35 11.94-11.94a11.88 11.88 0 0 0-3.49-8.41ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.72.98.99-3.63-.24-.37a9.9 9.9 0 0 1-1.51-5.24c0-5.47 4.46-9.93 9.94-9.93a9.87 9.87 0 0 1 7.01 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.48-4.46 9.93-9.95 9.93Zm5.45-7.45c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                </div>
                <a
                  href="https://wa.me/551932538006"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label="Abrir WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  (19) 3253-8006
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a href="mailto:contato@sosresolve.com.br" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contato@sosresolve.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SOS RESOLVE. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos e Políticas
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Compliance
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
