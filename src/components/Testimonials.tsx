import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin, Calendar, ThumbsUp } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Midea Carrier',
      role: 'Empresa',
      project: 'Regularização de Empreendimento em São Paulo',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Mesmo diante de um cenário desafiador, a Midea Carrier entendeu que era o momento de investir em mais um empreendimento na cidade de São Paulo, e o resultado não seria atingido com excelência se não pudéssemos contar com a parceria e todo o suporte da Construsato desde o projeto até a conclusão, obedecendo todos os requisitos legais oriundos de um grande empreendimento.',
      highlight: 'Parceria de excelência',
      date: 'Janeiro 2026',
      verified: true,
    },
    {
      id: 2,
      name: 'Grupo Empresarial',
      role: 'Cliente Corporativo',
      project: 'Licenciamento de Complexo Comercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop',
      rating: 5,
      text: 'A Construsato nos auxiliou em todo o processo de licenciamento do nosso complexo comercial. Demonstraram profundo conhecimento técnico e agilidade na resolução de questões complexas junto aos órgãos públicos. O projeto foi aprovado dentro do prazo.',
      highlight: 'Expertise técnica',
      date: 'Dezembro 2025',
      verified: true,
    },
    {
      id: 3,
      name: 'Incorporadora São Paulo',
      role: 'Cliente',
      project: 'EVTL e Aprovações',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Contratamos a Construsato para realizar o Estudo de Viabilidade Técnica e Legal de um terreno estratégico. A análise foi completa e nos deu total segurança para prosseguir com o investimento. Atendimento aos prazos impecável.',
      highlight: 'Análise completa e segura',
      date: 'Novembro 2025',
      verified: true,
    },
    {
      id: 4,
      name: 'Rede de Varejo',
      role: 'Cliente Corporativo',
      project: 'AVCB e Regularização',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Precisávamos regularizar diversos pontos de venda em São Paulo e a Construsato conduziu todo o processo com maestria. Obtivemos todos os AVCBs e alvarás necessários. Equipe técnica extremamente competente e comprometida.',
      highlight: 'Compromisso e resultados',
      date: 'Outubro 2025',
      verified: true,
    },
    {
      id: 5,
      name: 'Administração Predial',
      role: 'Gestão de Condomínios',
      project: 'Habite-se e Certidões',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Tivemos suporte completo na obtenção de certificados e regularização documental. A Construsato foi transparente em cada etapa e entregou tudo com planejamento e previsibilidade.',
      highlight: 'Atendimento aos prazos',
      date: 'Setembro 2025',
      verified: true,
    },
    {
      id: 6,
      name: 'Construtora Parceira',
      role: 'Parceiro Técnico',
      project: 'Aprovações de Projetos',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=150&h=150&fit=crop',
      rating: 5,
      text: 'A parceria com a Construsato elevou nosso padrão de entrega em aprovações. Eles dominam o processo, antecipam riscos e conduzem a documentação com excelência, reduzindo retrabalho.',
      highlight: 'Expertise técnica',
      date: 'Agosto 2025',
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
              Clientes que Confiam em Nosso Trabalho
            </h2>
            <p className="text-gray-600 text-lg">
              Diversos segmentos do mercado atendidos de acordo com as suas especificidades
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
                <p className="text-blue-100">Dados reais dos nossos projetos</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">98%</div>
                  <div className="text-blue-100 font-medium">Satisfação</div>
                  <div className="text-blue-200 text-xs mt-1">dos clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">250+</div>
                  <div className="text-blue-100 font-medium">Processos</div>
                  <div className="text-blue-200 text-xs mt-1">regularizados</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">4.9</div>
                  <div className="text-blue-100 font-medium">Avaliação</div>
                  <div className="text-blue-200 text-xs mt-1">média geral</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">100%</div>
                  <div className="text-blue-100 font-medium">Conformidade</div>
                  <div className="text-blue-200 text-xs mt-1">na entrega</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}