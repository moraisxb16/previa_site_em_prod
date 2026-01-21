import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Target } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Fundada em Princípios Éticos',
      description: 'Seriedade, qualidade e eficiência em cada projeto de regularização',
    },
    {
      icon: Users,
      title: 'Equipe Técnica Preparada',
      description: 'Alto nível de entrega e compromisso em cada novo desafio',
    },
    {
      icon: Target,
      title: 'Atuação Nacional',
      description: 'Atendimento personalizado em todo o território brasileiro',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden">
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
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY5MDE2MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe profissional Construsato"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-8 bg-blue-600 text-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[calc(100%-2rem)]">
                <div className="text-3xl sm:text-4xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">Anos no Mercado</div>
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
              Especialistas em Regularização Imobiliária
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Somos uma empresa que atua na área de regularização imobiliária há mais de 20 anos no mercado, fundada em princípios éticos, de seriedade, qualidade e eficiência, com estrutura e metas para vencer grandes desafios.
              <br /><br />
              Devido ao exigente nível do mercado atual, senso de responsabilidade e urgência estão presentes em cada um de nossos funcionários, resultando em um alto nível de entrega e compromisso em cada novo projeto.
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
                <span>Certificada ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Atendimento aos prazos</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Preços justos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
