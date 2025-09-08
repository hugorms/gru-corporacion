import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialIcons = [
    { 
      name: 'Facebook', 
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
      url: 'https://facebook.com/grucorporacion'
    },
    { 
      name: 'Instagram', 
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/3955/3955024.png',
      url: 'https://instagram.com/grucorporacion'
    },
    { 
      name: 'TikTok', 
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/3669/3669950.png',
      url: 'https://tiktok.com/@grucorporacion'
    },
    { 
      name: 'WhatsApp', 
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
      url: 'https://wa.me/584227000477',
      isWhatsApp: true
    }
  ];

  const handleSocialClick = (social) => {
    if (social.isWhatsApp) {
      const message = encodeURIComponent('Hola! Me interesa conocer más sobre los servicios náuticos de GRU Corporación.');
      const whatsappUrl = `https://wa.me/584227000477?text=${message}`;
      window.open(whatsappUrl, '_blank');
    } else {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-white text-primary-900 py-8 sm:py-12 relative z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center">
                <img 
                  src="/images/logos/LOGO sin texto .png" 
                  alt="GRU Corporación Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-primary-900">GRU CORPORACIÓN</h3>
                <p className="text-primary-700 text-base">NÁUTICA DE SERVICIOS</p>
              </div>
            </div>
            <p className="text-primary-700 leading-relaxed">
              Especialistas en servicios náuticos de calidad, brindando soluciones confiables y seguras.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary-900 font-semibold mb-5 text-base">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-700 hover:text-accent-600 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary-900 font-semibold mb-5 text-base">Servicios</h4>
            <ul className="space-y-2 text-primary-700 text-base">
              <li>Mantenimiento Naval</li>
              <li>Reparaciones Especializadas</li>
              <li>Inspecciones Técnicas</li>
              <li>Consultoría Náutica</li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary-900 font-semibold mb-5 text-base">Síguenos</h4>
            <div className="flex space-x-3 mb-4">
              {socialIcons.map((social) => (
                <motion.button
                  key={social.name}
                  onClick={() => handleSocialClick(social)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 shadow-md hover:shadow-lg bg-white hover:bg-gray-50"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title={`Contactar por ${social.name}`}
                >
                  <img 
                    src={social.iconUrl} 
                    alt={`Contactar por ${social.name}`}
                    className="w-6 h-6 object-contain"
                  />
                </motion.button>
              ))}
            </div>
            <div className="text-primary-700 text-base">
              <p>info@grucorporacion.com</p>
              <p>+58 422 700 0477</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;0424 959 0954</p>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-primary-200 mt-10 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-700">
            © 2025 GRU Corporación - Náutica de Servicios. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
