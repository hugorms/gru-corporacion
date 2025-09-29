import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contacto"
      className="py-12 sm:py-16 lg:py-20 relative z-20"
      style={{backgroundColor: '#2A3B55'}}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">Contáctanos</h2>
          <p className="text-sm text-secondary-200 px-4 sm:px-0">
            Servicios náuticos profesionales - Estamos aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Info de contacto */}
          <motion.div
initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="p-4 sm:p-6 rounded-2xl shadow-xl bg-primary-950 border border-primary-700/30">
    <h3 className="text-lg font-bold text-white mb-4 sm:mb-6">
      Información de Contacto
    </h3>

    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-accent-600 flex-shrink-0">
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base">Teléfono local</h4>
          <p className="text-secondary-300 text-sm sm:text-base">0212 959 0954</p>
        </div>
      </div>

      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-accent-600 flex-shrink-0">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base">Correo Electrónico</h4>
          <p className="text-secondary-300 text-sm sm:text-base">soporte@grunautica.com</p>
        </div>
      </div>

      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-accent-600 flex-shrink-0">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm sm:text-base">Ubicación</h4>
          <p className="text-secondary-300 text-sm sm:text-base leading-relaxed">
            <a
              href="https://maps.google.com/maps?q=Centro+Comercial+Tamanaco,+Pirámide+Invertida,+Caracas,+Venezuela"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-400 transition-colors duration-300 underline decoration-dotted"
            >
              Centro comercial ciudad Tamanaco,<br />Pirámide Invertida, piso 06, oficina 6-10
            </a>
          </p>
        </div>
      </div>
    </div>


    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-secondary-400/30">
      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
        Horarios
      </h4>
      <div className="text-secondary-300 space-y-1 text-xs sm:text-sm">
        <p>Lun-Vie: 8:00 AM - 6:00 PM</p>
        <p>Sáb: 9:00 AM - 4:00 PM</p>
        <p>Dom: Solo emergencias</p>
      </div>
    </div>
  </div>
</motion.div>

          {/* Formulario */}
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="p-4 sm:p-6 rounded-2xl shadow-xl bg-white">
    <h3 className="text-lg font-bold mb-4 sm:mb-5 text-primary-900">
      Envíanos un Mensaje
    </h3>
    
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2 text-primary-900">
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-secondary-300 text-primary-900 focus:border-accent-500 focus:ring-accent-500/20 focus:ring-2 transition-colors text-sm sm:text-base"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2 text-primary-900">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-secondary-300 text-primary-900 focus:border-accent-500 focus:ring-accent-500/20 focus:ring-2 transition-colors text-sm sm:text-base"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm sm:text-base font-medium mb-2 text-primary-900">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-secondary-300 text-primary-900 focus:border-accent-500 focus:ring-accent-500/20 focus:ring-2 transition-colors text-sm sm:text-base"
          placeholder="Tu número de teléfono"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2 text-primary-900">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-secondary-300 text-primary-900 focus:border-accent-500 focus:ring-accent-500/20 focus:ring-2 transition-colors resize-none text-sm sm:text-base"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
        ></textarea>
      </div>

      <motion.button
        type="submit"
        className="w-full text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-sm sm:text-base"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        <span className="text-black">Enviar Mensaje</span>
      </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
