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
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Construsato</h3>
                <p className="text-xs text-gray-400">Regularização Imobiliária</p>
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
                  Rua Voluntários da Pátria, nº 2468, 12º andar, conjuntos 121, 122, 123,124 e 126<br />
                  Santana – São Paulo | SP<br />
                  CEP: 02402-000
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:+551122615976" className="hover:text-white transition-colors">
                    (11) 2261-5976
                  </a>
                  <br />
                  <a href="tel:+551122655599" className="hover:text-white transition-colors">
                    (11) 2265-5599
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
              © {currentYear} Construsato. Todos os direitos reservados. | Empresa Certificada ISO 9001
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
