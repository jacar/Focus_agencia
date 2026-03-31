import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const allRoles = [
  "COMMUNITY MANAGER",
  "PILOTO DE DRON",
  "FILMMAKER",
  "EDITOR AUDIOVISUAL",
  "DISEÑADORAS GRÁFICAS",
  "TRAFFICKER DIGITAL",
  "COMUNICADORA",
  "PROGRAMADOR WEB"
];

const row1 = allRoles.slice(0, 4);
const row2 = allRoles.slice(4);

export const TeamRoles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom scroll tracking relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax translation FOR DESKTOP ONLY
  const x1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative py-[150px] md:py-48 px-0 overflow-hidden min-h-fit flex flex-col justify-center w-full"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Top White Separator - Thick line as in Mockup */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-white z-20" />

      {/* Decorative Scribbles (Scribbles of image_25.png) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
        {/* Left Scribble */}
        <svg viewBox="0 0 200 400" className="absolute left-[-20px] top-1/2 -translate-y-1/2 h-full w-auto text-white fill-none stroke-current stroke-1 opacity-40">
           <path d="M50,50 C20,100 80,150 40,200 C0,250 90,300 50,350" />
           <path d="M70,70 C40,120 100,170 60,220 C20,270 110,320 70,370" />
           <ellipse cx="40" cy="180" rx="30" ry="60" transform="rotate(-15 40 180)" />
        </svg>
        {/* Right Scribble */}
        <svg viewBox="0 0 200 400" className="absolute right-[-20px] top-1/2 -translate-y-1/2 h-full w-auto text-white fill-none stroke-current stroke-1 opacity-40 mirror">
           <path d="M150,50 C180,100 120,150 160,200 C200,250 110,300 150,350" />
           <path d="M130,70 C160,120 100,170 140,220 C180,270 90,320 130,370" />
           <ellipse cx="160" cy="220" rx="35" ry="70" transform="rotate(20 160 220)" />
        </svg>
      </div>

      {/* Mobile-Only View: Extreme Spacious Grid with 150px vertical padding */}
      <div className="md:hidden z-10 relative px-[40px] py-[20px]">
        <div className="flex flex-col items-center gap-[40px]">
          {allRoles.map((role, index) => (
            <RotatingButton3D key={index} text={role} />
          ))}
        </div>
      </div>

      {/* Tablet/Desktop View: Parallax Scroll Effect */}
      <div className="hidden md:flex z-10 relative flex-col gap-24 md:gap-32 overflow-visible">
        
        {/* Row 1: Moving Left */}
        <motion.div 
          style={{ x: x1 }}
          className="flex whitespace-nowrap gap-12 md:gap-20 justify-center items-center"
        >
          {row1.map((role, index) => (
            <RotatingButton3D key={index} text={role} />
          ))}
        </motion.div>

        {/* Row 2: Moving Right */}
        <motion.div 
          style={{ x: x2 }}
          className="flex whitespace-nowrap gap-12 md:gap-20 justify-center items-center"
        >
          {row2.map((role, index) => (
            <RotatingButton3D key={index} text={role} />
          ))}
        </motion.div>

      </div>

      {/* Embedded CSS for 3D Cube Effect based on User Snippet */}
      <style>{`
        .btn-3d-cube {
          position: relative;
          width: 145px;
          height: 48px;
          transition: 1.5s ease-in-out;
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateX(0deg);
          cursor: default;
        }
        @media (min-width: 375px) {
          .btn-3d-cube { width: 155px; }
        }
        @media (min-width: 414px) {
          .btn-3d-cube { width: 165px; }
        }
        @media (min-width: 768px) {
          .btn-3d-cube {
            width: 350px;
            height: 70px;
          }
        }
        .btn-3d-cube:hover {
          transform: perspective(1000px) rotateX(360deg);
        }
        .btn-3d-cube span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          background: #FFFFFF;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 8px;
          letter-spacing: 0.2px;
          transition: 0.5s;
          border: 1px solid #000;
          box-sizing: border-box;
          padding: 0 4px;
          white-space: normal;
          text-align: center;
          line-height: 1.1;
          backface-visibility: hidden;
          border-radius: 4px; /* Optional slight rounding for premium feel */
        }
        @media (min-width: 375px) {
          .btn-3d-cube span { font-size: 9px; padding: 0 8px; }
        }
        @media (min-width: 768px) {
          .btn-3d-cube span {
            font-size: 18px;
            letter-spacing: 2px;
            padding: 0 20px;
            border-radius: 8px;
          }
        }
        .btn-3d-cube:hover span {
          color: #fff;
          background: #8253FF;
        }
        
        /* Face Positioning - Each face is a span */
        .btn-3d-cube span:nth-child(1) { transform: rotateX(0deg) translateZ(24px); }
        .btn-3d-cube span:nth-child(2) { transform: rotateX(90deg) translateZ(24px); }
        .btn-3d-cube span:nth-child(3) { transform: rotateX(180deg) translateZ(24px); }
        .btn-3d-cube span:nth-child(4) { transform: rotateX(270deg) translateZ(24px); }

        @media (min-width: 768px) {
          .btn-3d-cube span:nth-child(1) { transform: rotateX(0deg) translateZ(35px); }
          .btn-3d-cube span:nth-child(2) { transform: rotateX(90deg) translateZ(35px); }
          .btn-3d-cube span:nth-child(3) { transform: rotateX(180deg) translateZ(35px); }
          .btn-3d-cube span:nth-child(4) { transform: rotateX(270deg) translateZ(35px); }
        }
      `}</style>
    </section>
  );
};

// Component for the 3D rotating cube button
const RotatingButton3D: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="btn-3d-cube">
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
};
