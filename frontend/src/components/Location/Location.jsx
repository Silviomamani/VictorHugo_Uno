import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaCompass, FaUpRightFromSquare } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

// Coordenadas corregidas para Victor Hugo 1249, Ostende
export const PROJECT_LOCATION = {
  lat: -37.129994,
  lng: -56.887480,
  address: "Av. Victor Hugo 1249",
  city: "Ostende, Pinamar, Buenos Aires",
  googleMapsUrl: "https://maps.google.com/?q=-37.129994,-56.887480"
};

export default function Location() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  // Use precise lat/lng coordinates to pin Ostende (not Sáenz Peña)
  const embedMapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${PROJECT_LOCATION.lat},${PROJECT_LOCATION.lng}&center=${PROJECT_LOCATION.lat},${PROJECT_LOCATION.lng}&zoom=17`
    : `https://maps.google.com/maps?q=${PROJECT_LOCATION.lat},${PROJECT_LOCATION.lng}&hl=es&z=17&output=embed`;

  return (
    <section id="ubicacion" className="py-24 bg-[#F8F6F3] relative overflow-hidden">
      <div className="w-full px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Location Info & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-light/15 text-ocean-dark text-xs font-semibold uppercase tracking-[0.25em]">
              <FaCompass className="w-4 h-4 text-ocean-light" />
              <span>Entorno & Entorno Costero</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ocean-dark tracking-tight leading-tight">
              Ubicación privilegiada<span className="block text-ocean-light text-2xl sm:text-3xl font-light mt-1">en Ostende, Pinamar</span>
            </h2>

            <p className="text-stone-600 font-light leading-relaxed text-sm">
              Victor Hugo se encuentra emplazado en <strong className="font-semibold text-ocean-dark">Av. Victor Hugo 1249</strong>, en el corazón tranquilo de Ostende.
            </p>

            <p className="text-stone-600 font-light leading-relaxed text-sm">
              Emplazado sobre el corredor principal de la ciudad, el proyecto se beneficia de un acceso inmejorable y una gran visibilidad. Su localización permite resolver la rutina diaria con total practicidad, rodeado de locales comerciales, transporte y los accesos clave hacia Pinamar y alrededores.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-sand-dark/40 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                {/* Minimalist thin-ring pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-ocean-light shrink-0 mt-0.5">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z" />
                </svg>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-sand-muted">
                    Dirección Confirmada
                  </h4>
                  <p className="text-sm font-semibold text-ocean-dark">
                    {PROJECT_LOCATION.address}
                  </p>
                  <p className="text-xs text-sand-muted">
                    {PROJECT_LOCATION.city}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button "ABRIR EN GOOGLE MAPS" */}
            <div className="pt-2">
              <a
                href={PROJECT_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ocean-dark hover:bg-ocean-medium text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Abrir en Google Maps</span>
                <FaUpRightFromSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps iFrame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group"
          >
            <iframe
              title="Ubicación Victor Hugo en Google Maps"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[105%] group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Map Badge */}
            <div className="absolute top-4 left-4 bg-ocean-dark/90 text-foam backdrop-blur-md px-4 py-2 rounded-xl text-xs font-serif font-bold border border-ocean-light/20 shadow-md flex items-center gap-2">
              <FaLocationDot className="w-3.5 h-3.5 text-ocean-light" />
              <span>Victor Hugo • Av. Victor Hugo 1249</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
