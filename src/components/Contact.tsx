import React from 'react';
import { Send, Mail, Phone } from 'lucide-react';


export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-black py-24 text-white">
      <div className="container overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          
          <div className="md:col-span-7 space-y-12">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tightest">
              IMPULSEMOS<br/><span className="text-[#7C3AED]">TU MARCA</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-bold max-w-lg leading-relaxed">
              Es hora de llevar tu marca al siguiente nivel. Completa el formulario y nos pondremos en contacto contigo.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all shadow-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Escríbenos</p>
                  <p className="text-xl font-bold">focuscreativecol@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Llámanos</p>
                  <p className="text-xl font-bold">+57 310 6446955</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-8 border-t border-white/5">
                <a href="#" className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:bg-[#121111] transition-all hover:scale-110 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]">
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22C10.64 22.08 11.31 22.14 12 22.14C12.69 22.14 13.36 22.08 14 22V13.5Z" />
                  </svg>
                </a>
                
                <a href="#" className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:bg-[#121111] transition-all hover:scale-110 shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                
                <a href="#" className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:bg-[#121111] transition-all hover:scale-110 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12.05 2C6.582 2 2.147 6.435 2.147 11.902c0 1.748.455 3.453 1.32 4.954L2 22l5.255-1.377a9.851 9.851 0 004.795 1.24h.004c5.467 0 9.902-4.435 9.902-9.902S17.517 2 12.05 2zm0 18.064c-1.554 0-3.078-.418-4.414-1.209l-.317-.188-3.284.86.876-3.203-.206-.328A8.046 8.046 0 013.91 11.902C3.91 7.411 7.561 3.76 12.05 3.76s8.14 3.651 8.14 8.142-3.651 8.142-8.14 8.142z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="bg-[#1C1B1B] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl sticky top-24">
              <div className="absolute top-0 right-10 w-20 h-1 bg-[#7C3AED] rounded-full"></div>
              
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED] transition-all font-bold" />
                </div>
                <div>
                  <input type="email" placeholder="Correo electrónico" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED] transition-all font-bold" />
                </div>
                <div>
                  <textarea rows={4} placeholder="Mensaje" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED] transition-all font-bold resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-[#7C3AED]/20">
                  ENVIAR MENSAJE <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
