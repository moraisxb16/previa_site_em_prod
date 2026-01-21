import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, Users, TrendingUp } from 'lucide-react';

export function TrustBanner() {
  const logos = [
    { name: 'Midea Carrier', icon: Building2 },
    { name: 'Igreja Bola de Neve', icon: Users },
    { name: 'Anvisa', icon: Award },
    { name: 'Corpo de Bombeiros', icon: TrendingUp },
  ];

  return (
    <section id="clientes" className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <p className="text-sm text-gray-600 font-medium">Veja quem confia em nós</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <logo.icon className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
