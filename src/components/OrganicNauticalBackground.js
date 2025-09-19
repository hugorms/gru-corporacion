import React from 'react';

const OrganicNauticalBackground = ({ className = '', style = {}, children, ...props }) => {
  const organicPaths = [
    // Tentáculo serpenteante superior
    "M10,20 C30,5 50,35 80,15 C110,0 130,40 160,25 C190,10 210,45 240,30",
    // Tentáculo ondulante central  
    "M50,50 C80,30 120,70 160,45 C200,20 240,65 280,40 C320,15 360,55 390,35",
    // Tentáculo curvado inferior
    "M0,80 C40,60 80,95 120,75 C160,55 200,90 240,70 C280,50 320,85 360,65",
    // Tentáculo espiral suave
    "M180,5 C220,25 260,5 300,30 C340,55 380,35 420,60 C460,85 500,65 540,90",
    // Tentáculo ondas orgánicas
    "M30,40 C70,20 110,60 150,35 C190,10 230,50 270,25 C310,0 350,40 390,20",
    // Tentáculo fluido adicional
    "M5,65 C45,45 85,80 125,60 C165,40 205,75 245,55 C285,35 325,70 365,50"
  ];

  const combinedStyle = {
    background: `
      linear-gradient(180deg, 
        rgba(42, 59, 85, 1) 0%, 
        rgba(42, 59, 85, 0.95) 20%, 
        rgba(42, 59, 85, 0.98) 80%, 
        rgba(42, 59, 85, 1) 100%
      )
    `,
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  return (
    <div className={className} style={combinedStyle} {...props}>
      {/* Patrón orgánico de tentáculos */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute inset-0 w-full h-full opacity-20" 
          viewBox="0 0 400 100" 
          preserveAspectRatio="none"
          style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))' }}
        >
          <defs>
            <filter id="relief" x="-50%" y="-50%" width="200%" height="200%">
              <feMorphology operator="dilate" radius="1"/>
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {organicPaths.map((path, index) => (
            <path
              key={index}
              d={path}
              fill="none"
              stroke="#3C4D70"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#relief)"
              opacity="0.6"
              style={{
                animationDelay: `${index * 0.3}s`,
                animation: 'float 8s ease-in-out infinite alternate'
              }}
            />
          ))}
        </svg>

        {/* Puntos orgánicos dispersos */}
        <div className="absolute top-4 left-8 w-2 h-2 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-12 right-12 w-1 h-1 bg-white opacity-15 rounded-full"></div>
        <div className="absolute bottom-6 left-1/4 w-1.5 h-1.5 bg-white opacity-8 rounded-full"></div>
        <div className="absolute bottom-3 right-1/3 w-1 h-1 bg-white opacity-12 rounded-full"></div>
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-white opacity-6 rounded-full"></div>

        {/* Gradiente de iluminación superior adicional */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 30%)',
            pointerEvents: 'none'
          }}
        ></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-2px) translateX(1px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </div>
  );
};

export default OrganicNauticalBackground;