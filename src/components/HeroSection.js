import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const backgroundImages = [
    "/images/fondos/fondo.webp",
    "/images/fondos/fondo2.webp",
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
            <img
              src={image}
              alt="Fondo náutico GRU Corporación"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`w-full h-full object-cover ${image.includes('fondo.webp') ? 'object-top' : 'object-center'}`}
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

      {/* Contenedor del título principal - GRUCORPORACIÓN, AGENCIA NAVIERA, descripción */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center -mt-64 sm:-mt-64 md:-mt-48 lg:-mt-32">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="leading-tight text-white relative"
            style={{ marginBottom: isMobile ? '0.5rem' : '1rem', willChange: 'transform' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="absolute rounded-2xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(178, 189, 206, 0.9) 0%, rgba(178, 189, 206, 0.6) 40%, rgba(178, 189, 206, 0.4) 70%, transparent 100%)',
                padding: isMobile ? '1.5rem 2rem 6rem 2rem' : '1rem 1rem 9rem 1rem',
                margin: isMobile ? '-1rem -1rem -4rem -1rem' : '-1rem -1rem -7rem -1rem',
                top: 0,
                left: isMobile ? '4%' : '8%',
                right: isMobile ? '4%' : '8%',
                bottom: isMobile ? '-4rem' : '-7rem',
                boxShadow: '0 -20px 25px -10px rgba(0, 0, 0, 0.2), -20px -10px 25px -10px rgba(0, 0, 0, 0.15), 20px -10px 25px -10px rgba(0, 0, 0, 0.15)',
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            ></motion.div>
            <div className="relative z-10">
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold inline-block"
                style={{color: '#B8872A', textShadow: '1px 1px 3px rgba(0,0,0,0.25)', willChange: 'transform'}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              >
                GRU
              </motion.span>
              <motion.span
                style={{marginLeft: '0.2em', color: '#FFFFFF', textShadow: '1px 1px 3px rgba(0,0,0,0.25)', willChange: 'transform'}}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              >
                CORPORACIÓN
              </motion.span>
            </div>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wide text-white relative z-20"
            style={{
              color: '#2A3B55',
              marginTop: isMobile ? '-0.5rem' : '0',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              willChange: 'transform'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            AGENCIA NAVIERA
          </motion.p>

          <motion.p
            className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-xs sm:max-w-2xl lg:max-w-3xl leading-relaxed mx-auto mb-4 sm:mb-12 text-white relative z-20"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              marginTop: isMobile ? '-0.5rem' : '0',
              willChange: 'transform'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          >
            Expertos en servicio de agenciamiento y tramites con mas de una década de experiencia.
          </motion.p>
        </motion.div>
      </div>

      {/* Contenedor independiente para eslogan y botón */}
      <div className="absolute bottom-40 sm:bottom-32 md:bottom-24 lg:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 px-4 sm:px-6">
        {/* Eslogan */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed mx-auto mb-4 sm:mb-6 text-white font-medium italic whitespace-nowrap"
          style={{
            color: '#FFFFFF',
            textShadow: '3px 3px 12px rgba(0,0,0,0.95), 1px 1px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.9)',
            willChange: 'transform',
            minWidth: 'max-content'
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        >
          Navegando hacia la excelencia
        </motion.p>

        {/* Botón Cotiza con nosotros con flecha al lado */}
        <motion.button
          className="px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-4 rounded-full text-sm sm:text-sm md:text-base lg:text-base font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center gap-2"
          style={{backgroundColor: '#B8872A', color: 'black', willChange: 'transform'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
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

      {/* Contenedor independiente para métodos de pago - más abajo del botón */}
      <div className="absolute bottom-28 sm:bottom-20 md:bottom-10 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 px-4 sm:px-6">
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {/* BCV */}
          <div className="relative group">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <img src="/images/payment-methods/bcv.png" alt="BCV" className="w-9 h-9 object-contain cursor-pointer" />
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50" style={{ backgroundColor: '#B2BDCE', color: '#2A3B55' }}>
              Aceptamos todo tipo de transferencias bancarias y Pago Móvil
            </div>
          </div>
          {/* USDT */}
          <div className="relative group">
            <img src="/images/payment-methods/usdt.png" alt="USDT" className="w-9 h-9 object-contain cursor-pointer" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50" style={{ backgroundColor: '#B2BDCE', color: '#2A3B55' }}>
              Pagos en USDT (Tether) - Todas las redes
            </div>
          </div>
          {/* Binance */}
          <div className="relative group">
            <img src="/images/payment-methods/binance.png" alt="Binance" className="w-9 h-9 object-contain cursor-pointer" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50" style={{ backgroundColor: '#B2BDCE', color: '#2A3B55' }}>
              Binance Pay - Transferencias instantáneas
            </div>
          </div>
          {/* Zelle */}
          <div className="relative group">
            <img src="/images/payment-methods/zelle.svg" alt="Zelle" className="w-9 h-9 object-contain cursor-pointer" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50" style={{ backgroundColor: '#B2BDCE', color: '#2A3B55' }}>
              Zelle - Pagos en USD desde USA
            </div>
          </div>
          {/* PayPal */}
          <div className="relative group">
            <img src="/images/payment-methods/paypal.png" alt="PayPal" className="w-9 h-9 object-contain cursor-pointer" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50" style={{ backgroundColor: '#B2BDCE', color: '#2A3B55' }}>
              PayPal - Pagos seguros internacionales
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
