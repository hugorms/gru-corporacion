import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  const backgroundImages = [
    "/images/fondos/fondo.jpg.jpg",
    "/images/fondos/fondo-2.jpg.jpg",
    "/images/fondos/fondo.3-jpg.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Esperar un poco más antes de iniciar el slideshow
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000); // Cambia cada 6 segundos

      return () => clearInterval(interval);
    }, 3000); // Espera 3 segundos antes de iniciar el slideshow

    return () => clearTimeout(initialDelay);
  }, [backgroundImages.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fondo base */}
      <div className="absolute inset-0 bg-primary-900"></div>
      
      {/* Slideshow de imágenes de fondo */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 3 }}
          >
            <OptimizedImage
              src={image}
              alt="Fondo náutico GRU Corporación"
              className={`w-full h-full object-cover ${image.includes('fondo.jpg.jpg') ? 'object-top' : 'object-center'}`}
              priority={index === 0}
              width="1920"
              height="1080"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-36 h-24 sm:h-36 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-20 sm:w-28 h-20 sm:h-28 bg-secondary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-32 sm:w-44 h-32 sm:h-44 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-secondary-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center -mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 leading-tight text-white"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">GRU</span>
            <span style={{marginLeft: '0.2em'}} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal">CORPORACIÓN</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-4xl md:text-5xl font-medium tracking-wide mb-6 text-white"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            NÁUTICA DE SERVICIOS
          </motion.p>

          <motion.p
            className="text-base sm:text-3xl md:text-4xl max-w-3xl leading-relaxed mx-auto mb-8 sm:mb-12 text-white"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Expertos en servicios náuticos profesionales con más de una década de experiencia, navegando hacia la excelencia.
          </motion.p>
        </motion.div>

        {/* Botón Contáctanos */}
        <motion.button
          className="text-black px-4 sm:px-8 md:px-10 py-2 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center mt-6 sm:mt-12"
          style={{backgroundColor: '#B8872A'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#A07825'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#B8872A'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById('contacto');
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
          }}
        >
          Contáctanos
        </motion.button>
      </div>

      {/* Indicador de scroll - Flecha alineada con Contacto (móvil: botón menú, desktop: enlace Contacto) */}
      <motion.div
        className="absolute bottom-8 cursor-pointer right-4 sm:right-6 lg:right-6 xl:right-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => {
          const element = document.getElementById('quienes-somos');
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
        }}
      >
        <svg 
          className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
