import { motion } from 'motion/react';
import { Shield, Clock, Leaf, Headphones, Award, DollarSign } from 'lucide-react';

export function Differentials() {
  const differentials = [
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description: 'Todos os nossos empreendimentos contam com 5 anos de garantia',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Cumprimento rigoroso de prazos em 98% das nossas obras',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Práticas sustentáveis e certificações ambientais',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Headphones,
      title: 'Atendimento VIP',
      description: 'Equipe dedicada para atender você do início ao pós-venda',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Materiais de primeira linha e acabamento impecável',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: DollarSign,
      title: 'Melhor Investimento',
      description: 'Localização estratégica garantindo alta valorização',
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-gray-300 text-lg">
              Compromisso com a excelência em cada detalhe do seu investimento
            </p>
          </motion.div>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para realizar seu sonho?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra o empreendimento perfeito para você
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold">
              Agendar Visita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
