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
      url: 'https://facebook.com/grucorporacion',
      icon: (
<svg 
    className="w-8 h-8 transition-colors duration-200 hover:text-gray-600" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" 
      fillRule="evenodd"
    />
    <path 
      d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.513V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.642H7.078v3.47h3.047v8.385a12.118 12.118 0 003.75 0v-8.385h2.796z" 
      fill="white"
    />
  </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/gru.nautica',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@grunautica?_t=ZM-8zaiv9p8g6C&_r=1',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    }
  ];

  const handleSocialClick = (social) => {
    window.open(social.url, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (targetId === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const currentScrollY = window.pageYOffset;
      const elementTop = rect.top + currentScrollY;

      const headerHeight = 80;
      const spacing = 20;
      const scrollPosition = elementTop - headerHeight - spacing;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
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
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/images/logos/LOGO sin texto .png"
                  alt="GRU Corporación - Agencia Portuaria La Guaira"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl tracking-wide leading-tight" style={{color: '#B8872A', textShadow: '1px 1px 3px rgba(0,0,0,0.25)'}}><span className="font-bold">GRU</span> CORPORACIÓN</h3>
                <p className="text-base font-medium tracking-wide leading-tight mt-0.5" style={{color: '#2A3B55', textShadow: '1px 1px 3px rgba(0,0,0,0.25)'}}>NÁUTICA DE SERVICIOS</p>
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
                    onClick={(e) => handleNavClick(e, link.href.substring(1))}
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
            <div className="flex space-x-6 mb-4 px-2 py-3">
              {socialIcons.map((social) => (
                <motion.button
                  key={social.name}
                  onClick={() => handleSocialClick(social)}
                  className="text-black hover:text-gray-600 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  title={`Contactar por ${social.name}`}
                >
                  {social.icon}
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
