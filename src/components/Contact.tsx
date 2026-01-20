import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      subcontent: 'Seg - Sex, 9h às 18h',
      href: 'tel:+551199999999',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '(11) 99999-9999',
      subcontent: 'Atendimento rápido',
      href: 'https://wa.me/551199999999',
      gradient: 'from-green-600 to-green-700',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@construtoraelite.com.br',
      subcontent: 'Respondemos em até 24h',
      href: 'mailto:contato@construtoraelite.com.br',
      gradient: 'from-purple-600 to-purple-700',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
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
              <MessageCircle className="w-4 h-4" />
              <span>Entre em Contato</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vamos Conversar Sobre Seu Projeto
            </h2>
            <p className="text-gray-600 text-lg">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar 
              o empreendimento perfeito
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Cards (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Method Cards */}
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-gray-700 font-medium mb-1">{method.content}</p>
                    <p className="text-sm text-gray-500">{method.subcontent}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
              <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-700 font-medium">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Horário de Atendimento</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Segunda a Sexta: 9h - 18h<br />
                    Sábado: 9h - 13h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Preencha o formulário
                </h3>
                <p className="text-gray-600">Retornaremos seu contato o mais breve possível</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className={`relative transition-all ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <div className={`relative transition-all ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <div className={`relative transition-all ${focusedField === 'phone' ? 'scale-[1.02]' : ''}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                      Interesse
                    </label>
                    <div className={`relative transition-all ${focusedField === 'interest' ? 'scale-[1.02]' : ''}`}>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('interest')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all"
                      >
                        <option value="">Selecione um empreendimento</option>
                        <option value="park-view">Residencial Park View</option>
                        <option value="skyline">Edifício Skyline Premium</option>
                        <option value="sunset">Condomínio Sunset</option>
                        <option value="horizon">Residencial Horizon</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <div className={`relative transition-all ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows={5}
                      className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all resize-none"
                      placeholder="Como podemos ajudar você?"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl transition-all font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/50"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-5 h-5" />
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Ao enviar este formulário, você concorda com nossa{' '}
                  <a href="#" className="text-blue-600 hover:underline">política de privacidade</a>
                </p>
              </form>
            </div>

            {/* Quick Schedule Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-center"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-semibold shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/50 transition-all">
                <Calendar className="w-5 h-5" />
                <span>Agendar Visita Presencial</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}