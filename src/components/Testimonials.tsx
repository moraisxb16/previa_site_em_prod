import { motion } from 'motion/react';
import { Star, Quote, MapPin, Calendar, ThumbsUp } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Arquiteta',
      project: 'Residencial Park View',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Excelente atendimento desde o primeiro contato. A equipe foi muito profissional e o apartamento foi entregue antes do prazo. Todos os acabamentos são de primeira qualidade. Recomendo de olhos fechados!',
      highlight: 'Entrega antecipada',
      date: 'Dezembro 2025',
      verified: true,
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Empresário',
      project: 'Edifício Skyline Premium',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Qualidade impecável! Todos os detalhes foram pensados com muito cuidado. A localização é perfeita e o acabamento superou minhas expectativas. Melhor investimento que já fiz.',
      highlight: 'Acabamento premium',
      date: 'Novembro 2025',
      verified: true,
    },
    {
      id: 3,
      name: 'Ana Rodrigues',
      role: 'Médica',
      project: 'Condomínio Sunset',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Realizei meu sonho da casa própria com a Construtora Elite. O pós-venda é excelente e sempre que preciso sou muito bem atendida. A infraestrutura do condomínio é sensacional!',
      highlight: 'Pós-venda excepcional',
      date: 'Outubro 2025',
      verified: true,
    },
    {
      id: 4,
      name: 'Carlos Mendes',
      role: 'Advogado',
      project: 'Residencial Horizon',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Comprei meu segundo imóvel com a Elite e mais uma vez superaram as expectativas. Processo transparente do início ao fim. A localização valoriza muito o investimento.',
      highlight: 'Alta valorização',
      date: 'Setembro 2025',
      verified: true,
    },
    {
      id: 5,
      name: 'Patricia Lima',
      role: 'Designer',
      project: 'Residencial Park View',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Como designer, tenho olhar crítico para acabamentos. Fiquei impressionada com a qualidade dos materiais e atenção aos detalhes. Cada ambiente foi pensado com cuidado.',
      highlight: 'Design impecável',
      date: 'Agosto 2025',
      verified: true,
    },
    {
      id: 6,
      name: 'Ricardo Oliveira',
      role: 'Engenheiro',
      project: 'Edifício Skyline Premium',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Como engenheiro civil, avaliei tudo tecnicamente antes de comprar. A construção é sólida, com tecnologia de ponta. Parabéns à equipe pela excelência em cada detalhe.',
      highlight: 'Qualidade técnica',
      date: 'Julho 2025',
      verified: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
              <Star className="w-4 h-4 fill-blue-600" />
              <span>Depoimentos Verificados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 text-lg">
              A satisfação de quem já realizou o sonho com a gente
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-6 transition-transform">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Header with Stars and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-lg">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Verificado</span>
                    </div>
                  )}
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-semibold rounded-lg mb-4 self-start border border-blue-100">
                  {testimonial.highlight}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-[15px]">
                  "{testimonial.text}"
                </p>

                {/* Footer */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur opacity-50"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Project and Date Info */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-blue-600 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{testimonial.project}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Números que Comprovam Nossa Excelência
                </h3>
                <p className="text-blue-100">Dados reais dos nossos clientes</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">98%</div>
                  <div className="text-blue-100 font-medium">Satisfação</div>
                  <div className="text-blue-200 text-xs mt-1">dos clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">250+</div>
                  <div className="text-blue-100 font-medium">Famílias</div>
                  <div className="text-blue-200 text-xs mt-1">realizadas</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">4.9</div>
                  <div className="text-blue-100 font-medium">Avaliação</div>
                  <div className="text-blue-200 text-xs mt-1">média geral</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">100%</div>
                  <div className="text-blue-100 font-medium">Recomendação</div>
                  <div className="text-blue-200 text-xs mt-1">dos clientes</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}