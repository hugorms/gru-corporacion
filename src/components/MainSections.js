import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Shield, Settings, Anchor, Ship, Truck } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
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
      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-12 sm:py-16 lg:py-20 relative">
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <OptimizedImage 
            src="/images/logos/LOGO sin texto .png"
            alt=""
            className="w-80 h-80 sm:w-96 sm:h-96 object-contain opacity-5"
            style={{ filter: 'grayscale(100%)' }}
            priority={false}
            width="384"
            height="384"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6 sm:mb-8">Quiénes Somos</h2>
            <div className="max-w-4xl mx-auto text-primary-800 space-y-3 sm:space-y-4 leading-relaxed px-4 sm:px-0">
              <p>
                Somos una agencia portuaria especializada en brindar soluciones integrales en logística marítima 
                y portuaria, con presencia activa en el puerto de La Guaira. Contamos con un equipo altamente 
                capacitado, enfocado en la eficiencia de cada proceso y respaldado por la certificación OMI, que garantiza la calidad en nuestras operaciones.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-base font-bold text-primary-900 mb-4">Misión</h3>
              <p className="text-primary-700">Satisfacer las necesidades de nuestros clientes, aplicando los más altos estándares de calidad, obteniendo los mejores resultados, optimizando el tiempo y el costo de todas las operaciones y procesos.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 mx-auto mb-4" style={{color: '#B2BDCE'}} />
              <h3 className="text-base font-bold text-primary-900 mb-4">Visión</h3>
              <p className="text-primary-700">Consolidarnos como la agencia naviera de referencia del país, demostrando su capacidad, cobertura y compromiso con el desarrollo marítimo.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Heart className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-base font-bold text-primary-900 mb-4">Valores</h3>
              <ul className="text-primary-700 text-left space-y-2">
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
      <section id="publico-objetivo" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
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

          {/* Móvil: 2-2-1 | Desktop mantiene distribución 2-1-2 */}
          <div className="max-w-5xl mx-auto">
            {/* Layout solo para móvil (2-2-1) */}
            <div className="grid grid-cols-2 gap-2 lg:hidden">
              {/* Fila 1: 2 contenedores */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <OrganicNauticalBackground className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 h-32 flex flex-col justify-center items-center">
                  <Ship className="w-8 h-8 mb-2" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Navieras y armadores internacionales</h3>
                </OrganicNauticalBackground>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <OrganicNauticalBackground className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 h-32 flex flex-col justify-center items-center">
                  <Truck className="w-8 h-8 mb-2" style={{color: '#B8872A'}} />
                  <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Empresas importadoras y exportadoras</h3>
                </OrganicNauticalBackground>
              </motion.div>

              {/* Fila 2: 2 contenedores */}
              <motion.div 
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 h-32 flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Settings className="w-8 h-8 mb-2" style={{color: '#B8872A'}} />
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
                <Users className="w-8 h-8 mb-2" style={{color: '#B8872A'}} />
                <h3 className="text-base font-bold" style={{color: '#B2BDCE'}}>Tripulaciones y embarcaciones</h3>
              </motion.div>

              {/* Fila 3: 1 contenedor centrado */}
              <motion.div 
                className="rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 p-4 h-32 col-span-2 justify-self-center flex flex-col justify-center items-center"
                style={{backgroundColor: '#2A3B55', width: 'calc(50% - 4px)'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Shield className="w-8 h-8 mb-2" style={{color: '#B8872A'}} />
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
                  <Ship className="w-12 h-12 mb-3" style={{color: '#B8872A'}} />
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
                  <Truck className="w-12 h-12 mb-3" style={{color: '#B8872A'}} />
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
      <section ref={servicesRef} id="servicios" className="pt-8 pb-32 sm:pt-10 sm:pb-40 lg:pt-12 lg:pb-48 bg-secondary-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-2">Nuestros Servicios</h2>
            <p className="text-base text-primary-700 max-w-3xl mx-auto px-4 sm:px-0">Ofrecemos servicios náuticos profesionales para mantener tu embarcación en perfectas condiciones y maximizar su rendimiento.</p>
          </motion.div>

          {/* Carrusel 3D Circular en Profundidad */}
          <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4" style={{ perspective: '1200px', minHeight: '400px', height: '400px' }}>
            {services.map((service, index) => {
              // Calcular posición relativa al centro
              const positionFromCenter = index - activeService;
              const isActive = positionFromCenter === 0;
              const absPosition = Math.abs(positionFromCenter);

              // Valores responsive para móvil y desktop
              const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
              const mobileRadius = 200; // Radio más pequeño para móvil
              const desktopRadius = 520; // Radio normal para desktop
              const radius = isMobile ? mobileRadius : desktopRadius;

              const mobileDepth = absPosition * 80; // Menos profundidad en móvil
              const desktopDepth = absPosition * 200; // Profundidad normal en desktop
              const depth = isMobile ? mobileDepth : desktopDepth;

              // Calcular profundidad y posición circular
              const angle = positionFromCenter * (isMobile ? 35 : 50); // Ángulo más cerrado en móvil

              // Mantener todos los contenedores viendo al frente (sin rotación 3D)
              const rotationY = 0;

              return (
                <motion.div
                  key={service.title}
                  ref={el => containerRefs.current[index] = el}
                  className="absolute cursor-pointer"
                  style={{
                    width: isMobile ? '280px' : '400px',
                    left: '50%',
                    top: '0%',
                    filter: isActive
                      ? `drop-shadow(0 ${isMobile ? 30 : 50}px ${isMobile ? 20 : 35}px rgba(0, 0, 0, 0.15))`
                      : `drop-shadow(0 ${(isMobile ? 20 : 35) + absPosition * (isMobile ? 8 : 15)}px ${(isMobile ? 15 : 25) + absPosition * (isMobile ? 6 : 12)}px rgba(0, 0, 0, ${0.1 + absPosition * 0.05}))`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{
                    scale: isActive ? 1 : (0.75 - absPosition * 0.1),
                    opacity: isActive ? 1 : (0.4 - absPosition * 0.25),
                    rotateY: rotationY,
                    x: `calc(-50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                    y: `calc(-50% - ${absPosition * 8}px)`,
                    z: -depth,
                    zIndex: isActive ? 20 : (5 - absPosition),
                    filter: !isActive ? `blur(${absPosition * 1.3}px) brightness(1.25)` : 'none'
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    zIndex: { duration: 0, delay: isActive ? 0 : 0.6 }
                  }}
                  viewport={{ once: true }}
                  onClick={() => handleContainerClick(index)}
                  whileHover={{
                    scale: isActive ? 1.005 : (0.78 - absPosition * 0.1),
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      type: "spring",
                      stiffness: 150,
                      damping: 20
                    }
                  }}
                >
                {/* Encabezado con número circular */}
                <div className="flex flex-col items-center mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm mb-2"
                    style={{
                      backgroundColor: '#B8872A'
                    }}
                  >
                    {index === 0 ? 2 : index === 1 ? 1 : index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-center text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                    {service.title}
                  </h3>
                </div>

                {/* Bloque de contenido con esquinas redondeadas */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderTopLeftRadius: isMobile ? '20px' : '24px',
                    borderTopRightRadius: isMobile ? '100px' : '120px',
                    borderBottomRightRadius: isMobile ? '20px' : '24px',
                    borderBottomLeftRadius: isMobile ? '100px' : '120px',
                    height: isMobile ? '280px' : '350px',
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

                  {/* Degradado que va hasta el centro */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(42, 59, 85, 0.95) 0%, rgba(42, 59, 85, 0.8) 20%, rgba(42, 59, 85, 0.5) 30%, rgba(42, 59, 85, 0.3) 40%, transparent 50%)'
                    }}
                  ></div>

                  {/* Contenido */}
                  <div className={`relative z-10 ${isMobile ? 'p-4' : 'p-6'} h-full flex flex-col justify-start items-center text-center`}>
                    <p
                      className={`text-white ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed ${isMobile ? 'mt-2' : 'mt-4'}`}
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
                </motion.div>
              );
            })}
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
