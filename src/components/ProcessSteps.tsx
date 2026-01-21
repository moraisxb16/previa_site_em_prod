import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Handshake, Key } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'ESTUDOS',
      description: 'Os EVTL’s (Estudos de Viabilidade Técnica e Legal) englobam serviços como análises de imóveis ou terrenos, avaliações técnicas e legais, estudos de massa e estimativa de custos quanto ao escopo de processos regulatórios. Apresentamos diagnósticos que avaliam o empreendimento de forma completa, em busca da melhor solução.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: FileText,
      title: 'LICENCIAMENTOS',
      description: 'Trabalhamos na obtenção de alvarás e licenças necessárias para a regularização do seu imóvel, Auto de Licença de Funcionamento, Certificado de Conclusão (Habite-se), Certificado de Segurança, Alvará de Aprovação e/ou Execução de Edificação, dentre a obtenção de outras licenças, fazem parte dos nossos serviços.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: Handshake,
      title: 'APROVAÇÕES DE PROJETOS',
      description: 'A área de Aprovações de Projeto é responsável por elaborar, protocolar e conduzir até a conclusão, todos os processos aprovativos junto aos órgãos públicos. Trabalhamos na obtenção do Alvará de Aprovação e Execução de Reforma, Alvará de Construção, Habite-se, Projeto de Publicidade, dentre outros.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      number: '04',
      icon: Key,
      title: 'AVCB',
      description: 'Conte com uma consultoria especializada para a Obtenção ou Renovação do AVCB (Auto de Vistoria do Corpo de Bombeiros), Elaboração de Projeto de Proteção de Combate a Incêndio, Certificado de Licença do Corpo de Bombeiros, dentre outras entregas para a regularização junto ao Corpo de Bombeiros. Realizamos treinamentos para a sua empresa.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Últimas notícias
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Acompanhe nossos artigos
            </h2>
            <p className="text-gray-600 text-lg">
              Sobre licenciamento e regularização imobiliária.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-4"></div>
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                {/* Number */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl transition-all font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/50"
          >
            SAIBA MAIS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
