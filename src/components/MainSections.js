import React from 'react'; 
import { motion } from 'framer-motion';
import { Users, Target, Heart, Shield, Settings, Anchor, Ship, Truck } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import OrganicNauticalBackground from './OrganicNauticalBackground';

const MainSections = () => {
  const services = [
    {
      image: "/images/servicios/agenciamiento-maritimo.jpg",
      title: "Agenciamiento Marítimo",
      description: "Gestión logística integral desde antes del arribo, seguimiento en puerto y zarpe, incluyendo representación ante autoridades locales y capitanía."
    },
    {
      image: "/images/servicios/embarcaciones.jpg",
      title: "Embarcaciones",
      description: "Lanchas pequeñas, medianas y buques."
    },
    {
      image: "/images/servicios/tramitacion-portuaria.jpg",
      title: "Tramitación Portuaria y Aduanal",
      description: "Permisología, documentación, despacho aduanal y zarpe."
    },
    {
      image: "/images/servicios/cobertura-portuaria.jpg",
      title: "Cobertura Portuaria",
      description: "Operamos en el puerto de La Guaira."
    },
    {
      image: "/images/servicios/suministro-provisiones.jpg",
      title: "Suministro de Provisiones (Shipchandler)",
      description: "Abastecimiento de insumos y repuestos para las embarcaciones."
    },
    {
      image: "/images/servicios/servicio-lanchaje.jpg",
      title: "Servicio de Lanchaje",
      description: "Traslado de tripulación, asistencia médica, logística de repuestos y piezas, compras y reparaciones."
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
                capacitado, enfocado en la eficiencia de cada proceso y respaldado por la certificación ISO 
                9001:2015, que garantiza la calidad en nuestras operaciones.
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
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-secondary-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4 sm:mb-6">Nuestros Servicios</h2>
            <p className="text-base text-primary-700 max-w-3xl mx-auto px-4 sm:px-0">Ofrecemos servicios náuticos profesionales para mantener tu embarcación en perfectas condiciones y maximizar su rendimiento.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-48 sm:h-64 lg:h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-base font-bold text-primary-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-base text-primary-700 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
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
