import { motion } from 'motion/react';
import { MapPin, Maximize2, Bed, Car, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'lancamento', label: 'Lançamento' },
    { id: 'construcao', label: 'Em Construção' },
    { id: 'prontos', label: 'Prontos' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Residencial Park View',
      location: 'Jardim Paulista, São Paulo',
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3Njg5MTU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Lançamento',
      specs: {
        area: '95-145m²',
        rooms: '3-4 quartos',
        parking: '2-3 vagas',
      },
      tag: 'Novo',
      tagColor: 'from-blue-600 to-blue-700',
      price: 'A partir de R$ 850.000',
      category: 'lancamento',
    },
    {
      id: 2,
      title: 'Edifício Skyline Premium',
      location: 'Vila Mariana, São Paulo',
      image: 'https://images.unsplash.com/photo-1553601581-8a1f1010efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3Njg5MTE3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Em construção',
      specs: {
        area: '120-180m²',
        rooms: '3-4 quartos',
        parking: '3-4 vagas',
      },
      tag: 'Destaque',
      tagColor: 'from-purple-600 to-purple-700',
      price: 'A partir de R$ 1.200.000',
      category: 'construcao',
    },
    {
      id: 3,
      title: 'Condomínio Sunset',
      location: 'Pinheiros, São Paulo',
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg4NTA0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Últimas unidades',
      specs: {
        area: '85-125m²',
        rooms: '2-3 quartos',
        parking: '2 vagas',
      },
      tag: 'Oportunidade',
      tagColor: 'from-orange-600 to-orange-700',
      price: 'A partir de R$ 720.000',
      category: 'prontos',
    },
    {
      id: 4,
      title: 'Residencial Horizon',
      location: 'Moema, São Paulo',
      image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2ODg3MTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Lançamento',
      specs: {
        area: '110-165m²',
        rooms: '3-4 quartos',
        parking: '2-4 vagas',
      },
      tag: 'VIP',
      tagColor: 'from-emerald-600 to-emerald-700',
      price: 'A partir de R$ 980.000',
      category: 'lancamento',
    },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="empreendimentos" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
              <span>Nossos Empreendimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projetos de Alto Padrão
            </h2>
            <p className="text-gray-600 text-lg">
              Localização privilegiada, acabamento premium e infraestrutura completa 
              para você e sua família.
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className={`bg-gradient-to-r ${project.tagColor} text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
                    {project.tag}
                  </span>
                </div>

                {/* Trending Icon for Hot Properties */}
                {project.tag === 'Destaque' && (
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-white text-sm font-semibold bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-start gap-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Preço</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{project.price}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <Maximize2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900">{project.specs.area}</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900">{project.specs.rooms}</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <Car className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900">{project.specs.parking}</div>
                  </div>
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
            <span>Ver Todos os Empreendimentos</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}