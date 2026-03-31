import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] bg-white border-b border-black/5 transition-all duration-300 ${
      isScrolled ? 'shadow-sm py-3' : 'py-5 md:py-8'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-7">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={logo}
            alt="Focus Creative Logo"
            className="h-9 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className={`text-base font-medium transition-colors ${
            pathname === '/' ? 'text-black font-bold' : 'text-black/70 hover:text-black font-medium'
          }`}>Inicio</Link>

          <Link to="/nosotros" className={`text-base font-medium transition-colors ${
            pathname === '/nosotros' ? 'text-black font-bold' : 'text-black/70 hover:text-black font-medium'
          }`}>Nosotros</Link>

          <Link to="/servicios" className={`text-base font-medium transition-colors ${
            pathname === '/servicios' ? 'text-black font-bold' : 'text-black/70 hover:text-black font-medium'
          }`}>
            Servicios
          </Link>

          <Link to="/contacto" className="bg-[#8B5CF6] text-white font-bold text-[16px] py-4 px-9 rounded-[20px] hover:bg-[#7c3aed] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/10">
            Contáctanos
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative text-black p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-black/5 py-10 px-6 flex flex-col items-center gap-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <Link to="/" className="text-2xl font-black text-black" onClick={() => setIsOpen(false)}>INICIO</Link>
          <Link to="/nosotros" className="text-2xl font-black text-black" onClick={() => setIsOpen(false)}>NOSOTROS</Link>
          <Link to="/#servicios" className="text-2xl font-black text-black" onClick={() => setIsOpen(false)}>SERVICIOS</Link>
          <Link to="/contacto" className="text-2xl font-black text-black" onClick={() => setIsOpen(false)}>CONTÁCTANOS</Link>
        </div>
      )}
    </nav>
  );
};


