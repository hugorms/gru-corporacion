import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos', id: 'quienes-somos' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    console.log('Navegando a:', targetId);
    
    if (targetId === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      console.log('Element found:', element);
      
      // Use getBoundingClientRect to get accurate position
      const rect = element.getBoundingClientRect();
      const currentScrollY = window.pageYOffset;
      const elementTop = rect.top + currentScrollY;
      
      const headerHeight = 80;
      const spacing = 20;
      const scrollPosition = elementTop - headerHeight - spacing;
      
      console.log('Current scroll:', currentScrollY);
      console.log('Element rect top:', rect.top);
      console.log('Element absolute top:', elementTop);
      console.log('Calculated scroll position:', scrollPosition);
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    } else {
      console.error('Elemento no encontrado:', targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const headerHeight = 80;
      const buffer = 20; // Buffer reducido para secciones compactas
      const scrollPosition = window.scrollY;

      // Si estamos en el top de la página, marcar "inicio"
      if (scrollPosition < 200) {
        setActiveSection('inicio');
        return;
      }

      // Prioridad específica para servicios (sección compacta)
      const serviciosElement = document.getElementById('servicios');
      if (serviciosElement) {
        const serviciosTop = serviciosElement.offsetTop - headerHeight;
        const serviciosBottom = serviciosElement.offsetTop + serviciosElement.offsetHeight;
        const serviciosBuffer = 150; // Buffer extra para servicios

        if (scrollPosition >= serviciosTop - serviciosBuffer && scrollPosition <= serviciosBottom + serviciosBuffer) {
          setActiveSection('servicios');
          return;
        }
      }

      // Para el resto de secciones, lógica normal pero excluyendo testimonios si estamos cerca de servicios
      let currentSection = 'inicio';

      for (const sectionId of sections) {
        if (sectionId === 'servicios') continue; // Ya verificado arriba

        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop - headerHeight - buffer;

          // Para testimonios, requerir estar claramente dentro de la sección
          if (sectionId === 'testimonios') {
            const testimoniosBuffer = 100;
            if (scrollPosition >= sectionTop + testimoniosBuffer) {
              currentSection = sectionId;
            }
          } else if (scrollPosition >= sectionTop) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg"
      style={{
        backgroundColor: '#B2BDCE80',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-0 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer py-1"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center">
            <img
              src="/images/logos/LOGO sin texto .png"
              alt="GRU Corporación - Agencia Portuaria La Guaira"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="ml-0 sm:ml-3">
            <h1 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl tracking-wide leading-tight" style={{color: '#B8872A', textShadow: '1px 1px 3px rgba(0,0,0,0.25)'}}><span className="font-bold">GRU</span> CORPORACIÓN</h1>
            <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium tracking-wide leading-tight mt-0.5" style={{color: '#2A3B55', textShadow: '1px 1px 3px rgba(0,0,0,0.25)'}}>AGENCIA NAVIERA</p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-5 xl:space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`font-medium relative px-1 transition-colors text-sm lg:text-sm xl:text-base ${
                activeSection === item.id
                  ? 'text-primary-700'
                  : 'text-primary-700 hover:text-accent-600'
              }`}
              style={activeSection === item.id ? { color: '#B8872A' } : {}}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.name}
              <span 
                className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'w-full bg-current' 
                    : 'w-0 bg-accent-500 group-hover:w-full'
                }`}
                style={activeSection === item.id ? { backgroundColor: '#B8872A' } : {}}
              ></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-1.5 rounded-md text-accent-600"
          style={{backgroundColor: '#2A3B55'}}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          className="lg:hidden backdrop-blur-md py-4 sm:py-6 border-t border-primary-200/40 shadow-inner"
          style={{backgroundColor: '#B2BDCE40'}}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block py-2 sm:py-3 px-4 sm:px-6 font-semibold text-base transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-primary-700' 
                  : 'text-primary-700 hover:text-accent-600'
              }`}
              style={activeSection === item.id ? { color: '#B8872A' } : {}}
              onClick={(e) => {
                handleNavClick(e, item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
