import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';


export default function Hero() {
  const [showOceanVideo, setShowOceanVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOceanVideo(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToProject = (e) => {
    e.preventDefault();
    const projectSection = document.querySelector('#proyecto');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative w-full h-[100dvh] sm:h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#2D1E14]">
      {/* Aerial Drone Beach Video Stream (Villarobles Top-Down Beach Shore Video) */}
      <div className="hero-video-wrapper absolute inset-0 z-0 overflow-hidden pointer-events-none scale-125">
        <iframe
          src="https://www.youtube-nocookie.com/embed/_axXD-NpJQQ?autoplay=1&mute=1&controls=0&loop=1&playlist=_axXD-NpJQQ&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1"
          title="Aerial Beach Video"
          className="hero-video-iframe w-full h-full object-cover border-none pointer-events-none scale-150 opacity-90"
          allow="autoplay; encrypted-media"
        />
      </div>



      {/* Initial Cover Image (Displays for 7 seconds, then smoothly cross-fades out) */}
      <div
        className={`absolute inset-0 z-1 overflow-hidden transition-opacity duration-1000 ${
          showOceanVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <img
          src="/fotos/hero.jpg"
          alt="Victor Hugo - Portada"
          className="w-full h-full object-cover object-center animate-ken-burns"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Contrast gradient for image state */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50" />
      </div>

      {/* Subtle overlay gradient over ocean video once active */}
      <div
        className={`absolute inset-0 z-1 bg-gradient-to-t from-[#24170E]/85 via-ocean-dark/20 to-black/40 transition-opacity duration-1000 pointer-events-none ${
          showOceanVideo ? 'opacity-100' : 'opacity-0'
        }`}
      />



      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 flex flex-col items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-amber-100">
              Desarrollo Inmobiliario • Pinamar
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white drop-shadow-2xl leading-tight max-w-full">
            {PROJECT_INFO.name}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-sand-light/95 max-w-4xl mx-auto tracking-wide leading-relaxed drop-shadow">
            {PROJECT_INFO.tagline}
          </p>

          {/* Action CTAs */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-[300px] sm:max-w-none mx-auto">
            <a
              href="#proyecto"
              onClick={handleScrollToProject}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-sand-light text-ocean-dark font-semibold text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              Ver Proyecto
            </a>

            <a
              href={PROJECT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-center group"
            >
              <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={handleScrollToProject}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-light drop-shadow">Scroll</span>
        <FaChevronDown className="w-4 h-4 text-sand-light/80 animate-bounce" />
      </motion.div>
    </section>
  );
}
