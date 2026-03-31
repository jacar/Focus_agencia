import React from 'react';

export const ServiceBar: React.FC = () => {
  const services = [
    "MARKETING DIGITAL",
    "SOCIAL MEDIA",
    "DISEÑO GRÁFICO",
    "META ADS",
    "ASESORÍAS",
    "PRODUCCIÓN AUDIOVISUAL"
  ];

  return (
    <div className="bg-[#7C3AED] py-8 overflow-hidden border-y border-black/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...services, ...services, ...services].map((service, i) => (
          <div key={i} className="flex items-center px-6 md:px-12 group">
            <span className="text-2xl md:text-5xl font-black text-white group-hover:text-black transition-colors duration-300">
              {service}
            </span>
            <span className="mx-4 md:mx-8 text-black opacity-30 text-2xl md:text-4xl">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
