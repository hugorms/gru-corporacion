import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainSections from './components/MainSections';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Forzar scroll al inicio cuando se monta el componente
    window.scrollTo(0, 0);
    
    // Limpiar el hash de la URL si existe
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    
    // Logo crece durante 2 segundos, luego se desvanece
    const logoTimer = setTimeout(() => setShowLogo(false), 2000);
    // El contenido aparece al mismo tiempo que el logo se desvanece
    const contentTimer = setTimeout(() => setShowContent(true), 1800);
    
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen relative">
        
        {/* Contenido principal siempre presente */}
        <motion.div
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <Header />
          <HeroSection />
          <MainSections />
          <ContactSection />
          <Footer />
        </motion.div>
        
        {/* Pantalla de carga - Fondo blanco + Logo */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              style={{
                backgroundImage: `url('/images/fondos/Images.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
            >
              {/* Degradado blanco para tapar el logo de la imagen de fondo */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at center,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0.3) 20%,
                    rgba(255, 255, 255, 0.15) 35%,
                    rgba(255, 255, 255, 0.08) 50%,
                    rgba(255, 255, 255, 0.03) 65%,
                    rgba(255, 255, 255, 0) 80%
                  )`
                }}
              />

              <div className={`relative ${isMobile ? 'w-[22rem] h-[22rem]' : 'w-[38rem] h-[38rem]'} z-10`}>
                <motion.img
                  src="/images/logo inicio/timon.png"
                  alt="Timón GRU Corporación"
                  className={`absolute ${isMobile ? '-top-14' : '-top-24'} left-0 w-full h-full object-contain z-5`}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: 1,
                    rotate: [0, -15, 10, -5, 0]
                  }}
                  transition={{
                    scale: {
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                      duration: 2.0
                    },
                    rotate: {
                      duration: 2.0,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.img
                  src="/images/logo inicio/pulpo.png"
                  alt="Pulpo GRU Corporación"
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                    duration: 2.0
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Floating WhatsApp Button - Only show when content is visible */}
        {showContent && <FloatingWhatsApp />}
        
      </div>
    </ErrorBoundary>
  );
};

export default App;