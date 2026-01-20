import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Certificada',
      description: 'Certificações ISO e prêmios de excelência em construção civil',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e experientes',
    },
    {
      icon: TrendingUp,
      title: 'Valorização Garantida',
      description: 'Empreendimentos em localização estratégica com alta valorização',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1765378025264-ca795700291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMHRlYW18ZW58MXx8fHwxNzY4ODQ5NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe de construção"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-90">Anos de Tradição</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Referência em Construção Civil
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Há mais de três décadas no mercado, a Construtora Elite se consolidou como 
              sinônimo de qualidade, confiança e inovação. Nossa missão é entregar 
              empreendimentos que superam expectativas, com acabamento impecável e localização privilegiada.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Garantia de 5 anos</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Prazos rigorosos</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Sustentabilidade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
