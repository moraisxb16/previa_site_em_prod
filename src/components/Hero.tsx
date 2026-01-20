import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5MTU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construção moderna"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60"></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-8 border border-blue-400/30 shadow-lg shadow-blue-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Mais de 30 anos de excelência no mercado</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1]">
              Construindo o
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Futuro com Você
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              Transformamos sonhos em realidade através de empreendimentos de alta qualidade, 
              tecnologia de ponta e compromisso com a excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all font-semibold flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60"
              >
                <span className="text-base sm:text-lg">Conheça Nossos Empreendimentos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
                className="group glass text-white px-8 py-4 rounded-xl transition-all font-semibold flex items-center justify-center gap-3 hover:bg-white/20"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                <span className="text-base sm:text-lg">Assista ao Vídeo</span>
              </motion.button>
            </div>

            {/* Enhanced Stats with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative glass p-4 sm:p-6 rounded-xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">250+</div>
                    <div className="text-gray-300 text-sm lg:text-base font-medium">Obras Entregues</div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative glass p-4 sm:p-6 rounded-xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">98%</div>
                    <div className="text-gray-300 text-sm lg:text-base font-medium">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative glass p-4 sm:p-6 rounded-xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">30+</div>
                    <div className="text-gray-300 text-sm lg:text-base font-medium">Anos de Mercado</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-10"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">Vídeo de apresentação</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}