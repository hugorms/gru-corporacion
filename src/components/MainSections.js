import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Shield, Settings, Anchor, Ship, Truck, ChevronLeft, ChevronRight, FileText, Package } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import OrganicNauticalBackground from './OrganicNauticalBackground';
import SimpleSpotlight from './SimpleSpotlight';

const MainSections = () => {
  const [activeService, setActiveService] = useState(1);
  const servicesRef = useRef(null);
  const containerRefs = useRef([]);
  const accumulatedScroll = useRef(0);

  const handleContainerClick = (index) => {
    console.log('Container clicked:', index);
    setActiveService(index);
  };

  const handlePrevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const services = [
    {
      image: "/images/servicios/tramitacion-portuaria.jpg",
      title: "Tramitación Portuaria y Aduanal",
      description: "Permisología, documentación, despacho \n aduanal y zarpe.",
      icon: FileText
    },
    {
      image: "/images/servicios/agenciamiento-maritimo.jpg",
      title: "Agenciamiento Marítimo",
      description: "Gestión logística integral desde antes del arribo, seguimiento en puerto y zarpe, incluyendo representación ante autoridades locales y capitanía.",
      icon: Anchor
    },
    {
      image: "/images/servicios/suministro-provisiones.jpg",
      title: "Suministro de Provisiones",
      description: "Abastecimiento de insumos y repuestos para las embarcaciones.",
      icon: Package
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Capitán de Flota Comercial",
      comment: "GRU Corporación ha sido nuestro socio confiable durante 5 años. Su profesionalismo y calidad de servicio son excepcionales.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marina Rodríguez",
      role: "Propietaria de Yate",
      comment: "El mantenimiento de mi yate nunca había estado en mejores manos. Trabajo impecable y atención personalizada.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Silva",
      role: "Director de Marina",
      comment: "Su experiencia y conocimiento técnico han sido fundamentales para mantener nuestra flota en óptimas condiciones.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    // Touch/swipe handling for mobile
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      if (window.innerWidth > 768) return; // Only on mobile
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = false;
    };

    const handleTouchMove = (e) => {
      if (window.innerWidth > 768) return; // Only on mobile
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      // Check if horizontal swipe (more horizontal than vertical)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        isSwiping = true;
        e.preventDefault(); // Prevent scrolling
      }
    };

    const handleTouchEnd = (e) => {
      if (window.innerWidth > 768) return; // Only on mobile
      if (!isSwiping || !startX) return;

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      // Swipe threshold
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next service
          setActiveService((prev) => (prev + 1) % services.length);
        } else {
          // Swipe right - previous service
          setActiveService((prev) => (prev - 1 + services.length) % services.length);
        }
      }

      startX = 0;
      startY = 0;
      isSwiping = false;
    };

    // Sensitive scroll - each 40px changes container (más sensible)
    const scrollSensitivity = 40;

    const handleScroll = () => {
      if (!servicesRef.current) return;

      const servicesSection = servicesRef.current;
      const sectionTop = servicesSection.offsetTop;
      const sectionHeight = servicesSection.offsetHeight;
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if services section is in view (sincronizado con Header buffer de 150px)
      const servicesInView = currentScrollY >= sectionTop - 150 && currentScrollY <= sectionTop + sectionHeight + 150;

      if (servicesInView) {
        // Always ensure we're in sync when in services area
        if (accumulatedScroll.current === 0) {
          console.log('Services section in view, initializing container 2...');
          setActiveService(1);
        }
      } else {
        // Reset when leaving services area
        accumulatedScroll.current = 0;
        setActiveService(1);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    if (servicesRef.current) {
      servicesRef.current.addEventListener('touchstart', handleTouchStart, { passive: false });
      servicesRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
      servicesRef.current.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (servicesRef.current) {
        servicesRef.current.removeEventListener('touchstart', handleTouchStart);
        servicesRef.current.removeEventListener('touchmove', handleTouchMove);
        servicesRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [services.length]);

  return (
    <div className="bg-gray-50 relative z-20">
      <SimpleSpotlight />
      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Olas náuticas de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z"
              fill="rgba(178, 189, 206, 0.1)"
              animate={{
                d: [
                  "M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z",
                  "M0,50 C300,80 600,40 900,70 C1050,85 1150,35 1200,50 L1200,120 L0,120 Z",
                  "M0,70 C300,100 600,20 900,50 C1050,65 1150,55 1200,70 L1200,120 L0,120 Z",
                  "M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z"
              fill="rgba(184, 135, 42, 0.08)"
              animate={{
                d: [
                  "M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z",
                  "M0,90 C200,60 400,120 600,90 C800,60 1000,120 1200,90 L1200,120 L0,120 Z",
                  "M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 L1200,120 L0,120 Z",
                  "M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
          <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z"
              fill="rgba(42, 59, 85, 0.05)"
              animate={{
                d: [
                  "M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z",
                  "M0,0 L0,50 C300,80 600,20 900,50 C1050,65 1150,35 1200,50 L1200,0 Z",
                  "M0,0 L0,30 C300,60 600,0 900,30 C1050,45 1150,15 1200,30 L1200,0 Z",
                  "M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2A3B55' }}>Quiénes Somos</h2>
            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 leading-relaxed px-4 sm:px-0">
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', color: '#2A3B55' }}>
                Somos una agencia portuaria especializada en brindar soluciones integrales en logística marítima
                y portuaria, con presencia activa en el puerto de La Guaira. Contamos con un equipo altamente
                capacitado, enfocado en la eficiencia de cada proceso y respaldado por la certificación OMI, que garantiza la calidad en nuestras operaciones.
              </p>
            </div>

            {/* Estadísticas flotantes */}
            <div className="relative overflow-hidden mx-auto h-24 mt-8" style={{ width: '700px', position: 'relative' }}>
              {/* Gradientes de desvanecimiento en los bordes */}
              <div
                className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0))'
                }}
              />
              <div
                className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0))'
                }}
              />

              <motion.div
                className="flex space-x-16 absolute"
                animate={{
                  x: [0, '-50%']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Primera serie de badges */}
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B8872A', boxShadow: '0 8px 25px -5px rgba(184, 135, 42, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>+10</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Años de experiencia</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B2BDCE', boxShadow: '0 8px 25px -5px rgba(178, 189, 206, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>OMI</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Certificación</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#2A3B55', boxShadow: '0 8px 25px -5px rgba(42, 59, 85, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>100+</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Clientes satisfechos</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B8872A', boxShadow: '0 8px 25px -5px rgba(184, 135, 42, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>24/7</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Servicio disponible</p>
                </div>

                {/* Segunda serie de badges (duplicados) */}
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B8872A', boxShadow: '0 8px 25px -5px rgba(184, 135, 42, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>+10</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Años de experiencia</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B2BDCE', boxShadow: '0 8px 25px -5px rgba(178, 189, 206, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>OMI</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Certificación</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#2A3B55', boxShadow: '0 8px 25px -5px rgba(42, 59, 85, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>100+</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Clientes satisfechos</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B8872A', boxShadow: '0 8px 25px -5px rgba(184, 135, 42, 0.4)' }}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>24/7</span>
                  </div>
                  <p className="text-sm whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif', color: '#2A3B55' }}>Servicio disponible</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-3xl text-center transition-all duration-300"
              style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <Target className="w-12 h-12 mx-auto mb-4 transition-colors duration-300" style={{ color: '#B8872A' }} />
              <h3 className="text-base font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2A3B55' }}>Misión</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', color: '#2A3B55' }}>Satisfacer las necesidades de nuestros clientes, aplicando los más altos estándares de calidad, obteniendo los mejores resultados, optimizando el tiempo y el costo de todas las operaciones y procesos.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 sm:p-8 rounded-3xl text-center transition-all duration-300"
              style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <Users className="w-12 h-12 mx-auto mb-4 transition-colors duration-300" style={{ color: '#B2BDCE' }} />
              <h3 className="text-base font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2A3B55' }}>Visión</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', color: '#2A3B55' }}>Consolidarnos como la agencia naviera de referencia del país, demostrando su capacidad, cobertura y compromiso con el desarrollo marítimo.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 sm:p-8 rounded-3xl text-center transition-all duration-300"
              style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <Heart className="w-12 h-12 mx-auto mb-4 transition-colors duration-300" style={{ color: '#B8872A' }} />
              <h3 className="text-base font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2A3B55' }}>Valores</h3>
              <ul className="text-left space-y-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', color: '#2A3B55' }}>
                <li>• Compromiso</li>
                <li>• Excelencia operativa</li>
                <li>• Seguridad</li>
                <li>• Trabajo en equipo</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Público Objetivo */}
      <section id="publico-objetivo" className="py-12 sm:py-16 lg:py-20 bg-white publico-objetivo-section relative overflow-hidden">
        {/* Olas náuticas de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z"
              fill="rgba(178, 189, 206, 0.1)"
              animate={{
                d: [
                  "M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z",
                  "M0,50 C300,80 600,40 900,70 C1050,85 1150,35 1200,50 L1200,120 L0,120 Z",
                  "M0,70 C300,100 600,20 900,50 C1050,65 1150,55 1200,70 L1200,120 L0,120 Z",
                  "M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z"
              fill="rgba(184, 135, 42, 0.08)"
              animate={{
                d: [
                  "M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z",
                  "M0,90 C200,60 400,120 600,90 C800,60 1000,120 1200,90 L1200,120 L0,120 Z",
                  "M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 L1200,120 L0,120 Z",
                  "M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
          <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z"
              fill="rgba(42, 59, 85, 0.05)"
              animate={{
                d: [
                  "M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z",
                  "M0,0 L0,50 C300,80 600,20 900,50 C1050,65 1150,35 1200,50 L1200,0 Z",
                  "M0,0 L0,30 C300,60 600,0 900,30 C1050,45 1150,15 1200,30 L1200,0 Z",
                  "M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6 sm:mb-8">Público Objetivo</h2>
            <p className="text-base text-primary-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 mb-8">
              Nuestros servicios están dirigidos a distintos actores del sector marítimo y portuario que buscan eficiencia, seguridad y respaldo en sus operaciones.
            </p>
          </motion.div>

          {/* Móvil: 2-2-1 | Desktop mantiene distribución 3-2 */}
          <div className="max-w-5xl mx-auto">
            {/* Layout solo para móvil (2-2-1) */}
            <div className="grid grid-cols-2 gap-2 lg:hidden">
              {/* Fila 1: 2 contenedores */}
              <motion.div
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 min-h-[9rem] h-auto flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Ship className="w-1/3 h-auto max-w-[3rem] mb-2" style={{color: '#B8872A'}} />
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Navieras y armadores internacionales</h3>
              </motion.div>

              <motion.div
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 min-h-[9rem] h-auto flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Truck className="w-1/3 h-auto max-w-[3rem] mb-2" style={{color: '#B8872A'}} />
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Empresas importadoras y exportadoras</h3>
              </motion.div>

              {/* Fila 2: 2 contenedores */}
              <motion.div
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 min-h-[9rem] h-auto flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Settings className="w-1/3 h-auto max-w-[3rem] mb-2" style={{color: '#B8872A'}} />
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Agentes de carga y operadores logísticos</h3>
              </motion.div>

              <motion.div
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 min-h-[9rem] h-auto flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Users className="w-1/3 h-auto max-w-[3rem] mb-2" style={{color: '#B8872A'}} />
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Tripulaciones y embarcaciones</h3>
              </motion.div>

              {/* Fila 3: 1 contenedor centrado */}
              <motion.div
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 min-h-[9rem] h-auto col-span-2 justify-self-center flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Shield className="w-1/3 h-auto max-w-[3rem] mb-2" style={{color: '#B8872A'}} />
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Autoridades y organismos portuarios</h3>
              </motion.div>
            </div>

            {/* Layout para desktop (3-2: 3 arriba y 2 abajo) */}
            <div className="hidden lg:block space-y-8">
              {/* Fila superior: 3 contenedores centrados */}
              <div className="flex justify-center gap-8">
                <motion.div
                  className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{backgroundColor: '#2A3B55'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Ship className="w-1/3 h-auto max-w-[3rem] mb-3" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Navieras y armadores internacionales</h3>
                </motion.div>

                <motion.div
                  className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{backgroundColor: '#2A3B55'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Truck className="w-1/3 h-auto max-w-[3rem] mb-3" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Empresas importadoras y exportadoras</h3>
                </motion.div>

                <motion.div
                  className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{backgroundColor: '#2A3B55'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Settings className="w-12 h-12 mb-3" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Agentes de carga y operadores logísticos</h3>
                </motion.div>
              </div>

              {/* Fila inferior: 2 contenedores centrados */}
              <div className="flex justify-center gap-8">
                <motion.div
                  className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{backgroundColor: '#2A3B55'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Users className="w-12 h-12 mb-3" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Tripulaciones y embarcaciones</h3>
                </motion.div>

                <motion.div
                  className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{backgroundColor: '#2A3B55'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Shield className="w-12 h-12 mb-3" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Autoridades y organismos portuarios</h3>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section ref={servicesRef} id="servicios" className="pt-8 pb-24 sm:pt-10 sm:pb-40 lg:pt-12 lg:pb-48 bg-secondary-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>Nuestros Servicios</h2>
            <p className="text-sm sm:text-base text-primary-700 max-w-3xl mx-auto px-4 sm:px-0" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300' }}>Ofrecemos servicios náuticos profesionales para mantener tu embarcación en perfectas condiciones y maximizar su rendimiento.</p>
          </motion.div>

          {/* Carrusel 3D Circular en Profundidad */}
          <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 h-[350px] sm:h-[400px] group"
               style={{ perspective: '1200px' }}>

            {/* Botón Anterior - Solo visible en desktop */}
            <button
              onClick={handlePrevService}
              className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              style={{
                backgroundColor: 'rgba(42, 59, 85, 0.9)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(178, 189, 206, 0.3)'
              }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#B8872A' }} />
            </button>

            {/* Botón Siguiente - Solo visible en desktop */}
            <button
              onClick={handleNextService}
              className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              style={{
                backgroundColor: 'rgba(42, 59, 85, 0.9)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(178, 189, 206, 0.3)'
              }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#B8872A' }} />
            </button>
            {services.map((service, index) => {
              // Calcular posición relativa al centro
              const positionFromCenter = index - activeService;
              const isActive = positionFromCenter === 0;
              const absPosition = Math.abs(positionFromCenter);

              // Valores responsive para móvil y desktop
              const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
              const mobileRadius = 200; // Radio aumentado para aún más separación en móvil
              const desktopRadius = 520; // Radio normal para desktop
              const radius = isMobile ? mobileRadius : desktopRadius;

              const mobileDepth = absPosition * 120; // Mayor profundidad para más separación
              const desktopDepth = absPosition * 200; // Profundidad normal en desktop
              const depth = isMobile ? mobileDepth : desktopDepth;

              // Calcular profundidad y posición circular
              const angle = positionFromCenter * (isMobile ? 55 : 50); // Ángulo aún mayor para más separación en móvil

              // Mantener todos los contenedores viendo al frente (sin rotación 3D)
              const rotationY = 0;

              return (
                <motion.div
                  key={service.title}
                  ref={el => containerRefs.current[index] = el}
                  className="absolute cursor-pointer"
                  style={{
                    width: isMobile ? '220px' : '400px',
                    left: '50%',
                    top: '10%',
                    filter: isActive
                      ? `drop-shadow(0 ${isMobile ? 30 : 50}px ${isMobile ? 20 : 35}px rgba(0, 0, 0, 0.15))`
                      : `drop-shadow(0 ${(isMobile ? 20 : 35) + absPosition * (isMobile ? 8 : 15)}px ${(isMobile ? 15 : 25) + absPosition * (isMobile ? 6 : 12)}px rgba(0, 0, 0, ${0.1 + absPosition * 0.05}))`
                  }}
                  initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{
                    scale: isActive ? 1 : (isMobile ? 0.55 - absPosition * 0.15 : 0.75 - absPosition * 0.1),
                    opacity: isActive ? 1 : (isMobile ? 0.25 - absPosition * 0.15 : 0.4 - absPosition * 0.25),
                    rotateY: rotationY,
                    x: `calc(-50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                    y: `calc(-50% - ${absPosition * (isMobile ? 15 : 8)}px)`,
                    z: -depth,
                    zIndex: isActive ? 20 : (5 - absPosition),
                    filter: !isActive ? `blur(${absPosition * (isMobile ? 2.5 : 1.3)}px) brightness(1.25)` : 'none'
                  }}
                  transition={{
                    duration: isMobile ? 0.8 : 1.2,
                    ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
                    zIndex: { duration: 0, delay: isActive ? 0 : (isMobile ? 0.3 : 0.6) }
                  }}
                  viewport={{ once: true }}
                  onClick={() => handleContainerClick(index)}
                  whileHover={{
                    scale: isActive ? 1.005 : (isMobile ? 0.6 - absPosition * 0.08 : 0.78 - absPosition * 0.1),
                    transition: {
                      duration: isMobile ? 0.3 : 0.5,
                      ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1],
                      type: isMobile ? "tween" : "spring",
                      stiffness: 150,
                      damping: 20
                    }
                  }}
                >
                {/* Encabezado con icono */}
                <div className="flex items-center justify-start mb-2 w-full px-2">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" style={{ color: '#B8872A' }} />
                  <h3 className="text-sm sm:text-lg font-bold text-left" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#2A3B55' }}>
                    {service.title}
                  </h3>
                </div>

                {/* Bloque de contenido con esquinas redondeadas */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderTopLeftRadius: isMobile ? '16px' : '24px',
                    borderTopRightRadius: isMobile ? '80px' : '120px',
                    borderBottomRightRadius: isMobile ? '16px' : '24px',
                    borderBottomLeftRadius: isMobile ? '80px' : '120px',
                    height: isMobile ? '240px' : '350px',
                    boxShadow: isActive
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 8px 16px -4px rgba(0, 0, 0, 0.2)'
                      : `0 ${10 + absPosition * 5}px ${20 + absPosition * 10}px -${2 + absPosition * 2}px rgba(0, 0, 0, ${0.2 + absPosition * 0.1})`,
                    transition: 'box-shadow 0.6s ease-out'
                  }}
                >
                  {/* Imagen de fondo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  ></div>

                  {/* Degradado mejorado para mejor legibilidad */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(42, 59, 85, 0.95) 0%, rgba(42, 59, 85, 0.85) 30%, rgba(42, 59, 85, 0.60) 50%, rgba(42, 59, 85, 0.25) 75%, transparent 90%)',
                      transition: 'background 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  ></div>


                  {/* Contenido */}
                  <div className={`relative z-10 h-full flex flex-col justify-start items-center`}
                       style={{
                         padding: isMobile ? '4px' : '8px',
                         paddingTop: isMobile ? '4px' : '8px'
                       }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      padding: isMobile ? '2px 8px 8px 4px' : '4px 15px 15px 8px',
                      boxSizing: 'border-box'
                    }}>
                      <p
                        className={`text-white ${isMobile ? 'text-xs' : 'text-base'} ${isMobile ? 'leading-normal' : 'leading-relaxed'} text-left`}
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: '400',
                          maxWidth: '100%',
                          wordBreak: isMobile ? 'keep-all' : 'normal',
                          hyphens: 'none',
                          marginTop: '0',
                          whiteSpace: isMobile ? 'pre-wrap' : 'normal',
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(0, 0, 0, 0.9)',
                          backgroundColor: 'rgba(42, 59, 85, 0.3)',
                          padding: isMobile ? '6px 8px' : '8px 12px',
                          borderRadius: '6px',
                          backdropFilter: 'blur(2px)'
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                </motion.div>
              );
            })}
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center space-x-3 mt-16">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleContainerClick(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: activeService === index ? '#B8872A' : '#B2BDCE',
                  opacity: activeService === index ? 1 : 0.6,
                  transform: activeService === index ? 'scale(1.2)' : 'scale(1)',
                  boxShadow: activeService === index ? '0 2px 8px rgba(184, 135, 42, 0.4)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4 sm:mb-6">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-base text-primary-700 max-w-3xl mx-auto px-4 sm:px-0">La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className="bg-primary-50 border border-primary-200 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <OptimizedImage 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name} - ${testimonial.role}`} 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 border-2 border-accent-500"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h4 className="font-bold text-primary-900 text-base">{testimonial.name}</h4>
                    <p className="text-accent-600 text-base">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-primary-700 italic leading-relaxed text-base">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
