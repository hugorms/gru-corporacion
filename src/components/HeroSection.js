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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Esperar un poco más antes de iniciar el slideshow
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000); // Cambia cada 8 segundos

      return () => clearInterval(interval);
    }, 5000); // Espera 5 segundos antes de iniciar el slideshow

    return () => {
      clearTimeout(initialDelay);
      window.removeEventListener('resize', checkMobile);
    };
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
            transition={{ duration: 2, ease: "easeInOut" }}
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
            className="leading-tight text-white relative"
            style={{ marginBottom: isMobile ? '0.5rem' : '1rem' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="absolute rounded-2xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(178, 189, 206, 0.75) 0%, rgba(178, 189, 206, 0.4) 40%, rgba(178, 189, 206, 0.2) 70%, transparent 100%)',
                padding: isMobile ? '1rem 1rem 9rem 1rem' : '1rem 1rem 9rem 1rem',
                margin: isMobile ? '-1rem -1rem -7rem -1rem' : '-1rem -1rem -7rem -1rem',
                top: 0,
                left: isMobile ? '5%' : '12%',
                right: isMobile ? '5%' : '12%',
                bottom: '-7rem',
                boxShadow: '0 -20px 25px -10px rgba(0, 0, 0, 0.2), -20px -10px 25px -10px rgba(0, 0, 0, 0.15), 20px -10px 25px -10px rgba(0, 0, 0, 0.15)'
              }}
              initial={{ opacity: 0, scale: isMobile ? 1 : 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.0, duration: isMobile ? 0.8 : 1.2, ease: isMobile ? "easeInOut" : "easeOut" }}
            ></motion.div>
            <div className="relative z-10">
              <motion.span
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold inline-block"
                style={{color: '#B8872A'}}
                initial={{ opacity: 0, y: isMobile ? 15 : 30, filter: isMobile ? "none" : "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: isMobile ? "none" : "blur(0px)" }}
                transition={{ delay: 3.3, duration: isMobile ? 0.6 : 1, ease: isMobile ? [0.25, 0.46, 0.45, 0.94] : "easeOut" }}
              >
                GRU
              </motion.span>
              <motion.span
                style={{marginLeft: '0.2em'}}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal inline-block"
                initial={{ opacity: 0, y: isMobile ? 15 : 30, filter: isMobile ? "none" : "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: isMobile ? "none" : "blur(0px)" }}
                transition={{ delay: 3.5, duration: isMobile ? 0.6 : 1, ease: isMobile ? [0.25, 0.46, 0.45, 0.94] : "easeOut" }}
              >
                CORPORACIÓN
              </motion.span>
            </div>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-4xl md:text-5xl font-medium tracking-wide text-white relative z-20"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              marginTop: isMobile ? '-0.5rem' : '0',
              marginBottom: isMobile ? '1rem' : '1.5rem'
            }}
            initial={{ opacity: 0, x: isMobile ? -20 : -50, filter: isMobile ? "none" : "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: isMobile ? "none" : "blur(0px)" }}
            transition={{ delay: 3.7, duration: isMobile ? 0.6 : 1, ease: isMobile ? [0.25, 0.46, 0.45, 0.94] : "easeOut" }}
          >
            NÁUTICA DE SERVICIOS
          </motion.p>

          <motion.p
            className="text-base sm:text-3xl md:text-4xl max-w-3xl leading-relaxed mx-auto mb-8 sm:mb-12 text-white relative z-20"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              marginTop: isMobile ? '-0.5rem' : '0'
            }}
            initial={{ opacity: 0, x: isMobile ? 20 : 50, filter: isMobile ? "none" : "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: isMobile ? "none" : "blur(0px)" }}
            transition={{ delay: 3.9, duration: isMobile ? 0.6 : 1, ease: isMobile ? [0.25, 0.46, 0.45, 0.94] : "easeOut" }}
          >
            Expertos en servicios náuticos profesionales con más de una década de experiencia, navegando hacia la excelencia.
          </motion.p>
        </motion.div>

        {/* Botón Cotiza con nosotros con flecha al lado */}
        <motion.button
          className="px-4 sm:px-8 md:px-10 py-2 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto mt-6 sm:mt-12 flex items-center justify-center gap-2"
          style={{backgroundColor: '#B8872A', color: 'black'}}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.1, duration: 1, ease: "easeOut" }}
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
          <span>Cotiza con nosotros</span>
          <motion.svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
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
