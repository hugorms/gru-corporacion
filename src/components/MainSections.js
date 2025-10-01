import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Shield, Settings, Anchor, Ship, Truck } from 'lucide-react';
import OrganicNauticalBackground from './OrganicNauticalBackground';

const MainSections = () => {
  const [activeService, setActiveService] = useState(1);
  const servicesRef = useRef(null);
  const containerRefs = useRef([]);
  const accumulatedScroll = useRef(0);

  const handleContainerClick = (index) => {
    console.log('Container clicked:', index);
    setActiveService(index);
  };

  const services = [
    {
      image: "/images/servicios/tramitacion-portuaria.jpg",
      title: "Tramitación Portuaria y Aduanal",
      description: "Permisología, documentación, despacho aduanal y zarpe."
    },
    {
      image: "/images/servicios/agenciamiento-maritimo.jpg",
      title: "Agenciamiento Marítimo",
      description: "Gestión logística integral desde antes del arribo, seguimiento en puerto y zarpe, incluyendo representación ante autoridades locales y capitanía."
    },
    {
      image: "/images/servicios/suministro-provisiones.jpg",
      title: "Suministro de Provisiones",
      description: "Abastecimiento de insumos y repuestos para las embarcaciones."
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
    // Throttled scroll handler for better performance
    let scrollTimeout;

    const handleScroll = () => {
      if (scrollTimeout) return; // Skip if already throttled

      scrollTimeout = requestAnimationFrame(() => {
        if (!servicesRef.current) {
          scrollTimeout = null;
          return;
        }

        const servicesSection = servicesRef.current;
        const sectionTop = servicesSection.offsetTop;
        const sectionHeight = servicesSection.offsetHeight;
        const currentScrollY = window.scrollY;

        // Optimized viewport detection
        const servicesInView = currentScrollY >= sectionTop - 150 && currentScrollY <= sectionTop + sectionHeight + 150;

        if (servicesInView && accumulatedScroll.current === 0) {
          setActiveService(1);
        } else if (!servicesInView) {
          accumulatedScroll.current = 0;
          setActiveService(1);
        }

        scrollTimeout = null;
      });
    };

    // Add optimized scroll listener with passive option
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [services.length]);

  return (
    <div className="bg-gray-50 relative z-20">
      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-primary-900">
        {/* Olas náuticas de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z"
              fill="rgba(178, 189, 206, 0.08)"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                d: [
                  "M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z",
                  "M0,50 C300,80 600,40 900,70 C1050,85 1150,35 1200,50 L1200,120 L0,120 Z",
                  "M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse"
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
            <motion.h2
              className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              Quiénes Somos
            </motion.h2>
            <motion.div
              className="max-w-4xl mx-auto text-gray-200 space-y-3 sm:space-y-4 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                style={{ willChange: 'transform, opacity' }}
              >
                Somos una agencia portuaria especializada en brindar soluciones integrales en logística marítima
                y portuaria, con presencia activa en el puerto de La Guaira. Contamos con un equipo altamente
                capacitado, enfocado en la eficiencia de cada proceso y respaldado por la certificación OMI, que garantiza la calidad en nuestras operaciones.
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl text-center border border-white/20"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: '0 15px 40px -8px rgba(0, 0, 0, 0.4), 0 6px 8px -2px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Target className="w-10 h-10 text-accent-600 mx-auto mb-2" />
              <h3 className="text-base font-bold text-primary-900 mb-3">Misión</h3>
              <p className="text-primary-700 text-base leading-relaxed">Satisfacer las necesidades de nuestros clientes, aplicando los más altos estándares de calidad, obteniendo los mejores resultados, optimizando el tiempo y el costo de todas las operaciones y procesos.</p>
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl text-center border border-white/20"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: '0 15px 40px -8px rgba(0, 0, 0, 0.4), 0 6px 8px -2px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Users className="w-10 h-10 mx-auto mb-2" style={{color: '#B2BDCE'}} />
              <h3 className="text-base font-bold text-primary-900 mb-3">Visión</h3>
              <p className="text-primary-700 text-base leading-relaxed">Consolidarnos como la agencia naviera de referencia del país, demostrando su capacidad, cobertura y compromiso con el desarrollo marítimo.</p>
            </motion.div>

            <motion.div
              className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl text-center border border-white/20"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: '0 15px 40px -8px rgba(0, 0, 0, 0.4), 0 6px 8px -2px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Heart className="w-10 h-10 text-accent-600 mx-auto mb-2" />
              <h3 className="text-base font-bold text-primary-900 mb-3">Valores</h3>
              <ul className="text-primary-700 text-left space-y-1 text-base leading-snug">
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
      <section id="publico-objetivo" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Olas náuticas de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z"
              fill="rgba(184, 135, 42, 0.06)"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                d: [
                  "M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z",
                  "M0,0 L0,30 C300,60 600,0 900,30 C1050,45 1150,15 1200,30 L1200,0 Z",
                  "M0,0 L0,40 C300,70 600,10 900,40 C1050,55 1150,25 1200,40 L1200,0 Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse"
              }}
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-primary-900 mb-6 sm:mb-8">Público Objetivo</h2>
            <p className="text-base text-primary-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 mb-8">
              Nuestros servicios están dirigidos a distintos actores del sector marítimo y portuario que buscan eficiencia, seguridad y respaldo en sus operaciones.
            </p>
          </motion.div>

          {/* Móvil: 2-2-1 | Desktop mantiene distribución 2-1-2 */}
          <div className="max-w-5xl mx-auto">
            {/* Layout solo para móvil (2-2-1) */}
            <div className="grid grid-cols-2 gap-2 lg:hidden">
              {/* Fila 1: 2 contenedores */}
              <motion.div
                className="rounded-3xl text-center p-4 h-32 flex flex-col justify-center items-center"
                style={{
                  backgroundColor: '#2A3B55',
                  boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-2">
                  <Ship className="w-full h-full" style={{color: '#B8872A'}} />
                </div>
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Navieras y armadores internacionales</h3>
              </motion.div>

              <motion.div
                className="rounded-3xl text-center p-4 h-32 flex flex-col justify-center items-center"
                style={{
                  backgroundColor: '#2A3B55',
                  boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-2">
                  <Truck className="w-full h-full" style={{color: '#B8872A'}} />
                </div>
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Empresas importadoras y exportadoras</h3>
              </motion.div>

              {/* Fila 2: 2 contenedores */}
              <motion.div
                className="rounded-3xl text-center p-4 h-32 flex flex-col justify-center items-center"
                style={{
                  backgroundColor: '#2A3B55',
                  boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-2">
                  <Settings className="w-full h-full" style={{color: '#B8872A'}} />
                </div>
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Agentes de carga y operadores logísticos</h3>
              </motion.div>

              <motion.div 
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 h-32 flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-2">
                  <Users className="w-full h-full" style={{color: '#B8872A'}} />
                </div>
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Tripulaciones y embarcaciones</h3>
              </motion.div>

              {/* Fila 3: 1 contenedor centrado */}
              <motion.div
                className="rounded-3xl text-center p-4 h-32 col-span-2 justify-self-center flex flex-col justify-center items-center"
                style={{
                  backgroundColor: '#2A3B55',
                  width: 'calc(50% - 4px)',
                  boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-2">
                  <Shield className="w-full h-full" style={{color: '#B8872A'}} />
                </div>
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Autoridades y organismos portuarios</h3>
              </motion.div>
            </div>

            {/* Layout para desktop (3-2: 3 arriba y 2 abajo) */}
            <div className="hidden lg:block space-y-8">
              {/* Fila superior: 3 contenedores centrados */}
              <div className="flex justify-center gap-8">
                <motion.div
                  className="rounded-3xl text-center p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: '#2A3B55',
                    boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mb-3">
                    <Ship className="w-full h-full" style={{color: '#B8872A'}} />
                  </div>
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Navieras y armadores internacionales</h3>
                </motion.div>

                <motion.div
                  className="rounded-3xl text-center p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: '#2A3B55',
                    boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mb-3">
                    <Truck className="w-full h-full" style={{color: '#B8872A'}} />
                  </div>
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Empresas importadoras y exportadoras</h3>
                </motion.div>

                <motion.div
                  className="rounded-3xl text-center p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: '#2A3B55',
                    boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mb-3">
                    <Settings className="w-full h-full" style={{color: '#B8872A'}} />
                  </div>
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Agentes de carga y operadores logísticos</h3>
                </motion.div>
              </div>

              {/* Fila inferior: 2 contenedores centrados */}
              <div className="flex justify-center gap-8">
                <motion.div
                  className="rounded-3xl text-center p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: '#2A3B55',
                    boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mb-3">
                    <Users className="w-full h-full" style={{color: '#B8872A'}} />
                  </div>
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Tripulaciones y embarcaciones</h3>
                </motion.div>

                <motion.div
                  className="rounded-3xl text-center p-8 w-80 h-40 flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: '#2A3B55',
                    boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center mb-3">
                    <Shield className="w-full h-full" style={{color: '#B8872A'}} />
                  </div>
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Autoridades y organismos portuarios</h3>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section ref={servicesRef} id="servicios" className="pt-8 pb-32 sm:pt-10 sm:pb-40 lg:pt-12 lg:pb-48 bg-secondary-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-primary-900 mb-2">Nuestros Servicios</h2>
            <p className="text-base text-primary-700 max-w-3xl mx-auto px-4 sm:px-0">Ofrecemos servicios náuticos profesionales para mantener tu embarcación en perfectas condiciones y maximizar su rendimiento.</p>
          </motion.div>

          {/* Grid de 3 servicios simétricos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.2, 0.4) }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Título con número circular */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                    {service.title}
                  </h3>
                </div>

                {/* Bloque de contenido */}
                <div
                  className="relative overflow-hidden bg-white rounded-2xl shadow-xl"
                  style={{
                    height: '280px',
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {/* Imagen de fondo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  ></div>

                  {/* Degradado overlay mejorado para mejor contraste */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(42, 59, 85, 0.85) 25%, rgba(42, 59, 85, 0.65) 50%, rgba(0, 0, 0, 0.4) 75%, transparent 100%)'
                    }}
                  ></div>

                  {/* Contenido con mejor contraste */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-start">
                    <p
                      className="text-base font-bold leading-relaxed mt-2"
                      style={{
                        color: '#B2BDCE',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Olas náuticas de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-28" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z"
              fill="rgba(42, 59, 85, 0.05)"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                d: [
                  "M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z",
                  "M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 L1200,120 L0,120 Z",
                  "M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse"
              }}
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-primary-900 mb-4 sm:mb-6">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-base text-primary-700 max-w-3xl mx-auto px-4 sm:px-0">La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-primary-50 border border-primary-200 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl"
                style={{
                  willChange: 'transform, opacity'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 border-2 border-accent-500"
                    style={{
                      minWidth: typeof window !== 'undefined' && window.innerWidth <= 768 ? '48px' : '64px',
                      minHeight: typeof window !== 'undefined' && window.innerWidth <= 768 ? '48px' : '64px',
                      backgroundColor: '#f3f4f6',
                      width: typeof window !== 'undefined' && window.innerWidth <= 768 ? '48px' : '64px',
                      height: typeof window !== 'undefined' && window.innerWidth <= 768 ? '48px' : '64px'
                    }}
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
