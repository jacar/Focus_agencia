import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoblanco.png';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#8253FF] w-full py-16 md:py-20 text-white mt-16 md:mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          
          {/* Default Logo column */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <img src={logo} alt="Focus Creative Logo" className="w-auto h-auto max-w-[250px] md:max-w-[300px] object-contain" />
          </div>

          {/* Navigation Links column */}
          <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/3">
            <Link to="/" className="text-xl lg:text-2xl hover:text-white/80 transition-colors font-medium">Inicio</Link>
            <Link to="/nosotros" className="text-xl lg:text-2xl hover:text-white/80 transition-colors font-medium">Nosotros</Link>
            <Link to="/servicios" className="text-xl lg:text-2xl hover:text-white/80 transition-colors font-medium">Servicios</Link>
            <Link to="/contacto" className="text-xl lg:text-2xl hover:text-white/80 transition-colors font-medium">Contacto</Link>
          </div>

          {/* Social and Contact column */}
          <div className="flex flex-col items-center md:items-end w-full md:w-1/3 space-y-6">
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-6">
              {/* Facebook Icon */}
              <a href="#" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#121111] hover:bg-black rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="md:w-10 md:h-10 mt-1">
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22C10.64 22.08 11.31 22.14 12 22.14C12.69 22.14 13.36 22.08 14 22V13.5Z" />
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="#" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#121111] hover:bg-black rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-9 md:h-9">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* WhatsApp Icon */}
              <a href="#" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#121111] hover:bg-black rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="md:w-10 md:h-10">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.05 2C6.582 2 2.147 6.435 2.147 11.902c0 1.748.455 3.453 1.32 4.954L2 22l5.255-1.377a9.851 9.851 0 004.795 1.24h.004c5.467 0 9.902-4.435 9.902-9.902S17.517 2 12.05 2zm0 18.064c-1.554 0-3.078-.418-4.414-1.209l-.317-.188-3.284.86.876-3.203-.206-.328A8.046 8.046 0 013.91 11.902C3.91 7.411 7.561 3.76 12.05 3.76s8.14 3.651 8.14 8.142-3.651 8.142-8.14 8.142z"/>
                </svg>
              </a>
            </div>

            {/* Contact Info text */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end space-y-2 mt-4">
              <p className="text-white font-semibold text-lg lg:text-xl tracking-wide">+310 6446955</p>
              <p className="text-white font-medium text-sm lg:text-base uppercase tracking-wider">FOCUSCREATIVECOL@GMAIL.COM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-16 pt-8 flex justify-center items-center">
          <p className="text-white/80 text-sm font-medium tracking-wide">
            Todos los derechos reservados Focus 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
