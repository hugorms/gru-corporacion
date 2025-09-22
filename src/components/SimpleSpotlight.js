import { useEffect, useRef } from 'react';

const SimpleSpotlight = ({ targetSelector = '.publico-objetivo-section' }) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Solo en pantallas grandes (no móviles)
    if (typeof window !== 'undefined' && window.innerWidth <= 480) return;

    // Crear spotlight
    const spotlight = document.createElement('div');
    spotlight.style.cssText = `
      position: fixed;
      width: 1600px;
      height: 1600px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(184, 135, 42, 0.002) 0%,
        rgba(184, 135, 42, 0.0015) 25%,
        rgba(184, 135, 42, 0.001) 45%,
        rgba(184, 135, 42, 0.0008) 60%,
        rgba(184, 135, 42, 0.0005) 75%,
        rgba(184, 135, 42, 0.0003) 85%,
        rgba(184, 135, 42, 0.0001) 92%,
        transparent 98%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;

      // Verificar si estamos en la sección objetivo
      const targetSection = document.querySelector(targetSelector);
      if (!targetSection) return;

      const rect = targetSection.getBoundingClientRect();
      const mouseInside = e.clientX >= rect.left &&
                         e.clientX <= rect.right &&
                         e.clientY >= rect.top &&
                         e.clientY <= rect.bottom;

      if (mouseInside) {
        spotlightRef.current.style.left = e.clientX + 'px';
        spotlightRef.current.style.top = e.clientY + 'px';
        spotlightRef.current.style.opacity = '1';
      } else {
        spotlightRef.current.style.opacity = '0';
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 480 && spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (spotlightRef.current?.parentNode) {
        spotlightRef.current.parentNode.removeChild(spotlightRef.current);
      }
    };
  }, [targetSelector]);

  return null;
};

export default SimpleSpotlight;