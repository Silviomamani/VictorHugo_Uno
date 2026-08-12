import React from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { PROJECT_INFO } from '../../data/proyecto';
import { PROJECT_LOCATION } from '../Location/Location';

// Social links configuration
export const SOCIAL_LINKS = {
  whatsapp: PROJECT_INFO.whatsappLink,
  instagram: "https://www.instagram.com/victorhugo_uno/",
  googleMaps: PROJECT_LOCATION.googleMapsUrl,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F2132] text-[#EAF2F8] pt-16 pb-12 transition-colors duration-300">
      <div className="w-full px-6 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#1E3A54]/60">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <span className="font-serif tracking-[0.2em] font-bold text-xl text-white block">
              {PROJECT_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#C4924A] block">
              Pinamar • Ostende
            </span>
            <p className="text-xs text-sky-100/70 font-light leading-relaxed">
              {PROJECT_INFO.tagline}. Un desarrollo diseñado para combinar arquitectura contemporánea, serena privacidad e inversión sólida.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-medium text-sky-100/80">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyecto" onClick={(e) => handleNavClick(e, '#proyecto')} className="hover:text-white transition-colors">
                  El Proyecto
                </a>
              </li>
              <li>
                <a href="#amenities" onClick={(e) => handleNavClick(e, '#amenities')} className="hover:text-white transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#plantas" onClick={(e) => handleNavClick(e, '#plantas')} className="hover:text-white transition-colors">
                  Plantas & Planos
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleNavClick(e, '#galeria')} className="hover:text-white transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#ubicacion" onClick={(e) => handleNavClick(e, '#ubicacion')} className="hover:text-white transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-white">
              Ubicación & Contacto
            </h4>
            <div className="text-xs text-sky-100/80 space-y-2 font-light">
              <p className="font-medium text-white flex items-center gap-2">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#C4924A] shrink-0" />
                <span>{PROJECT_INFO.address}</span>
              </p>
              <p className="pl-5 text-sky-200/60">
                {PROJECT_INFO.city}
              </p>
              <p className="pt-2 flex items-center gap-2">
                <FaWhatsapp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{PROJECT_INFO.whatsappFormatted}</a></span>
              </p>
            </div>
          </div>

          {/* Col 4: Social Media Icons & Direct WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-white">
              Redes & Canales
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#1E3A54] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#1E3A54] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-10 h-10 rounded-full bg-[#1E3A54] hover:bg-[#C4924A] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaMapMarkerAlt className="w-5 h-5" />
              </a>
            </div>
            
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Consultar por WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sky-100/50 font-light gap-4">
          <p>© {currentYear} Victor Hugo. Todos los derechos reservados.</p>
          <p className="text-[10px] uppercase tracking-widest text-[#C4924A]/80">
            Pinamar • Ostende • Argentina
          </p>
        </div>

      </div>
    </footer>
  );
}
