import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

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
                    alt="Logo SOSRESOLVE"
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
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  EVTL - Estudos de Viabilidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Licenciamentos
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
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Rua Santa Cruz, 469 - Cambuí<br />
                  Campinas - SP<br />
                  CEP: 13024-100
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:+551932538006" className="hover:text-white transition-colors">
                    (19) 3253-8006
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:construsato@construsato.com.br" className="text-gray-400 hover:text-white transition-colors text-sm">
                  construsato@construsato.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SOSRESOLVE. Todos os direitos reservados. | Empresa Certificada ISO 9001
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
