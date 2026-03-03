import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function VideoShowcase() {
  const navigate = useNavigate();

  const highlights = [
    'Ética, alto nível técnico e transparência',
    'Atendimento aos prazos e preços justos',
    'Atuação em todo o território nacional',
    'Soluções completas em regularização imobiliária',
  ];

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate('/contato', { state: { scrollTo: 'contact-form' } });
  };

  return (
    <section id="compliance" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/30">
              <Award className="w-4 h-4" />
              <span>Compliance</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluções com ética, alto nível técnico e transparência
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Regularização Imobiliária
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Nossa equipe técnica está preparada para trazer as soluções mais assertivas e eficientes para o seu negócio.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-200">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToContactForm}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all font-semibold shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/60"
            >
              Conte-nos sobre o seu projeto
            </button>
          </motion.div>

          {/* Right - Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://i.ibb.co/1fjL1VDS/ik14wmt9.png"
                alt="Equipe SOS RESOLVE"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-sm font-medium rounded-lg">
                SOS RESOLVE
              </div>

              {/* Quality Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                20+ anos de mercado
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10 opacity-50 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10 opacity-50 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
