import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainSections from './components/MainSections';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showContent, setShowContent] = useState(false);

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
              style={{background: 'linear-gradient(135deg, #2A3B55 0%, #B2BDCE 100%)'}}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
            >
              <motion.img
                src="/images/logos/LOGO sin texto .png"
                alt="GRU Corporación"
                className="w-64 h-64 object-contain relative z-10"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 2.0, ease: "easeOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </ErrorBoundary>
  );
};

export default App;