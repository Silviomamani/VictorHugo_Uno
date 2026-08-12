import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PROJECT_INFO } from '../../data/proyecto';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label on Hover */}
      <span className="mr-3 px-3 py-1.5 rounded-xl bg-ocean-dark/95 text-foam text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden sm:block border border-ocean-light/30">
        Consultar por WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={PROJECT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}
