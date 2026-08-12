import React, { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Proyecto', href: '#proyecto' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Plantas', href: '#plantas' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo Typographic */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="group flex flex-col focus:outline-none"
        >
          <span
            className={`tracking-[0.25em] font-semibold text-xl md:text-2xl transition-colors duration-300 ${
              isScrolled
                ? 'text-[#2C241D] group-hover:text-[#9E7B4F]'
                : 'text-white group-hover:text-sand-light'
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="hidden sm:inline">{PROJECT_INFO.name}</span>
            <span className="sm:hidden">{PROJECT_INFO.shortName}</span>
          </span>
          <span className={`text-[9px] uppercase tracking-[0.3em] font-light transition-colors duration-300 ${
            isScrolled
              ? 'text-[#9E7B4F]'
              : 'text-sand-light/90'
          }`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Pinamar • Ostende
          </span>
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:text-ocean-light ${
                isScrolled
                  ? 'text-ocean-dark'
                  : 'text-sand-light hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors focus:outline-none ${
              isScrolled
                ? 'text-ocean-dark hover:bg-sand-dark/30'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-nav px-6 pt-4 pb-8 space-y-4 animate-fade-in shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block text-sm uppercase tracking-[0.25em] font-medium text-ocean-dark hover:text-ocean-light py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PROJECT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
