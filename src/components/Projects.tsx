import { motion } from 'motion/react';
import React, { useState } from 'react';
import { FileSearch, FileCheck, Building2, Shield, ArrowRight, Sparkles } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'estudos', label: 'Estudos' },
    { id: 'licenciamentos', label: 'Licenciamentos' },
    { id: 'aprovacoes', label: 'Aprovações' },
  ];

  const solutions = [
    {
      id: 1,
      title: 'EVTL - Estudos de Viabilidade',
      subtitle: 'Análise completa para seu empreendimento',
      description: 'Os EVTL’s (Estudos de Viabilidade Técnica e Legal) englobam serviços como análises de imóveis ou terrenos, avaliações técnicas e legais, estudos de massa e estimativa de custos quanto ao escopo de processos regulatórios. Apresentamos diagnósticos que avaliam o empreendimento de forma completa, em busca da melhor solução.',
      image: 'https://images.unsplash.com/photo-1721132537184-5494c01ed87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBibHVlcHJpbnQlMjBwbGFubmluZ3xlbnwxfHx8fDE3Njg5NzA0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: FileSearch,
      tag: 'Análise',
      tagColor: 'from-blue-600 to-blue-700',
      category: 'estudos',
      features: ['Análise de imóveis', 'Avaliação técnica e legal', 'Estudos de massa', 'Estimativa de custos'],
    },
    {
      id: 2,
      title: 'Licenciamentos',
      subtitle: 'Alvarás e licenças necessárias',
      description: 'Trabalhamos na obtenção de alvarás e licenças necessárias para a regularização do seu imóvel, Auto de Licença de Funcionamento, Certificado de Conclusão (Habite-se), Certificado de Segurança, Alvará de Aprovação e/ou Execução de Edificação, dentre a obtenção de outras licenças, fazem parte dos nossos serviços.',
      image: 'https://images.unsplash.com/photo-1587874121242-9bd41fdc169c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHBlcm1pdCUyMGxpY2Vuc2V8ZW58MXx8fHwxNzY5MDE2MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Shield,
      tag: 'Compliance',
      tagColor: 'from-purple-600 to-purple-700',
      category: 'licenciamentos',
      features: ['Alvará de Funcionamento', 'Habite-se', 'Certificado de Segurança', 'Licenças diversas'],
    },
    {
      id: 3,
      title: 'Aprovações de Projetos',
      subtitle: 'Condução completa até a conclusão',
      description: 'A área de Aprovações de Projeto é responsável por elaborar, protocolar e conduzir até a conclusão, todos os processos aprovativos junto aos órgãos públicos. Trabalhamos na obtenção do Alvará de Aprovação e Execução de Reforma, Alvará de Construção, Habite-se, Projeto de Publicidade, dentre outros.',
      image: 'https://images.unsplash.com/photo-1764106813759-9ef7bf42a0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50JTIwYXBwcm92YWx8ZW58MXx8fHwxNzY5MDE2MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: FileCheck,
      tag: 'Aprovação',
      tagColor: 'from-emerald-600 to-emerald-700',
      category: 'aprovacoes',
      features: ['Alvará de Reforma', 'Alvará de Construção', 'Habite-se', 'Projeto de Publicidade'],
    },
    {
      id: 4,
      title: 'AVCB',
      subtitle: 'Corpo de Bombeiros',
      description: 'Conte com uma consultoria especializada para a Obtenção ou Renovação do AVCB (Auto de Vistoria do Corpo de Bombeiros), Elaboração de Projeto de Proteção de Combate a Incêndio, Certificado de Licença do Corpo de Bombeiros, dentre outras entregas para a regularização junto ao Corpo de Bombeiros. Realizamos treinamentos para a sua empresa.',
      image: 'https://images.unsplash.com/photo-1748951689438-63996dd1bff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5JTIwYnVpbGRpbmclMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2OTAxNjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Building2,
      tag: 'Segurança',
      tagColor: 'from-orange-600 to-orange-700',
      category: 'licenciamentos',
      features: ['Obtenção de AVCB', 'Renovação de AVCB', 'Projeto de Combate a Incêndio', 'Treinamentos'],
    },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? solutions 
    : solutions.filter(p => p.category === activeFilter);

  return (
    <section id="solucoes" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Nossas Soluções</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conheça Nossos Serviços
            </h2>
            <p className="text-gray-600 text-lg">
              Nossa equipe técnica está preparada para trazer as soluções mais assertivas e eficientes para o seu negócio.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className={`bg-gradient-to-r ${solution.tagColor} text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
                    {solution.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-blue-600 font-semibold text-sm mb-4">
                  {solution.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-green-500 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/50 group/btn">
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl transition-all font-semibold inline-flex items-center gap-2 shadow-lg">
            <span>Conheça Todos os Nossos Serviços</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}