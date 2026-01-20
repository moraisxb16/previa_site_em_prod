import { motion } from 'motion/react';
import { Play, Award, CheckCircle } from 'lucide-react';

export function VideoShowcase() {
  const highlights = [
    'Acabamento Premium',
    'Localização Privilegiada',
    'Áreas de Lazer Completas',
    'Segurança 24h',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              <span>Conheça por Dentro</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experimente um Tour Virtual pelos Nossos
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Empreendimentos
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Conheça cada detalhe dos nossos projetos através de uma experiência imersiva. 
              Veja a qualidade dos acabamentos, áreas comuns e diferenciais que só a Construtora Elite oferece.
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

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all font-semibold shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/60">
              Agende uma Visita Presencial
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODkxNjA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tour Virtual"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </motion.div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-sm font-medium rounded-lg">
                3:45
              </div>

              {/* Quality Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                4K
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
