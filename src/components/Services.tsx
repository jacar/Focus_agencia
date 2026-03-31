import React from 'react';
import { motion } from 'framer-motion';
import { Share2, PenTool, Globe, BarChart3, HelpCircle, Camera } from 'lucide-react';

const services = [
  {
    title: 'SOCIAL MEDIA',
    icon: Share2,
    details: ['Creación de Contenido', 'Administración de Redes', 'Diseño Gráfico', 'Copy Writing', 'Estrategia']
  },
  {
    title: 'DISEÑO GRÁFICO',
    icon: PenTool,
    details: ['Branding, Logos', 'Manual Corporativo', 'Piezas Publicitarias', 'Retoque Fotográfico']
  },
  {
    title: 'DISEÑO WEB',
    icon: Globe,
    details: ['Landing Pages', 'Sitios Informativos', 'E-commerce', 'UX/UI Design']
  },
  {
    title: 'META ADS',
    icon: BarChart3,
    details: ['Campañas de Tráfico', 'Segmentación Avanzada', 'Generación de Leads']
  },
  {
    title: 'ASESORÍAS',
    icon: HelpCircle,
    details: ['Consultoría Estratégica', 'Auditoría Digital']
  },
  {
    title: 'PRODUCCIÓN AUDIOVISUAL',
    icon: Camera,
    details: ['Video Marketing', 'Reels de Alto Impacto', 'Drone Shots']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            NUESTROS <span className="text-purple">SERVICIOS</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Soluciones integrales diseñadas para potenciar tu marca y conectar con tu audiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 glass border border-white/5 rounded-[2rem] hover:bg-surface-low transition-all"
            >
              <div className="w-14 h-14 bg-purple/10 rounded-2xl flex items-center justify-center mb-6 border border-purple/20 group-hover:bg-primary transition-colors">
                <service.icon size={28} className="text-purple group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl mb-4 tracking-tight">{service.title}</h3>
              <ul className="space-y-2">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2 text-sm text-muted">
                    <div className="w-1.5 h-1.5 bg-purple rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
