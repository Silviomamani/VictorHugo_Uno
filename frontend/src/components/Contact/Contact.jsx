import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLocationDot, FaPlay, FaImage } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

const INSTAGRAM_HANDLE = 'victorhugo_uno';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

// Placeholder grid items for "próximamente" Instagram feed
const PLACEHOLDER_POSTS = [
  { type: 'video', label: 'Video del proyecto' },
  { type: 'image', label: 'Fachada' },
  { type: 'image', label: 'Interior' },
  { type: 'video', label: 'Recorrido virtual' },
  { type: 'image', label: 'Detalle arquitectónico' },
  { type: 'image', label: 'Entorno' },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-ocean-light/8" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-sand/70" />
      </div>

      <div className="w-full px-6 lg:px-16 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-ocean-light mb-3">
            Redes & Canales
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-ocean-dark tracking-tight leading-tight mb-4">
            Contacto
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-ocean-light" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── LEFT COLUMN: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-stone-600 font-light leading-relaxed text-sm">
              Dejanos tu inquietud para recibir asesoramiento comercial sobre unidades disponibles, condiciones y detalles del proyecto.
            </p>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-sand-dark/40 bg-white shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-sand flex items-center justify-center shrink-0">
                <FaLocationDot className="w-5 h-5 text-ocean-dark" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-sand-muted mb-1">
                  Dirección
                </h4>
                <p className="text-sm font-semibold text-ocean-dark">
                  {PROJECT_INFO.address}
                </p>
                <p className="text-xs text-sand-muted mt-0.5">{PROJECT_INFO.city}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-sand-dark/40 bg-white shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-sand-muted mb-1">
                  WhatsApp Directo
                </h4>
                <a
                  href={PROJECT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                >
                  {PROJECT_INFO.whatsappFormatted}
                </a>
              </div>
            </div>

            {/* WhatsApp CTA card — white background */}
            <div className="p-7 rounded-2xl bg-white border border-sand-dark/20 space-y-4 shadow-sm">
              <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-ocean-light/30 text-[9px] uppercase tracking-[0.3em] font-bold text-ocean-dark">
                Respuesta Inmediata
              </span>
              <h4 className="font-serif text-xl font-bold text-ocean-dark leading-tight">
                ¿Preferís chatear directamente?
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Contactanos por WhatsApp para resolver tus dudas de forma instantánea con un asesor comercial.
              </p>
              <a
                href={PROJECT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md hover:scale-105 transition-transform"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Iniciar Chat en WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Instagram Feed ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Instagram Header — entire header is a clickable link */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-6 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <FaInstagram className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ocean-dark group-hover:text-ocean-medium transition-colors">
                  @{INSTAGRAM_HANDLE}
                </h3>
                <p className="text-xs text-sand-muted font-light mt-0.5">
                  Seguinos para ver fotos y videos del proyecto
                </p>
              </div>
              <span className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-ocean-dark text-ocean-dark group-hover:bg-ocean-dark group-hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300">
                <FaInstagram className="w-3.5 h-3.5" />
                <span>Seguir</span>
              </span>
            </a>

            {/* "Próximamente" notice */}
            <div className="mb-5 p-4 rounded-xl bg-sand border border-ocean-light/30 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-ocean-light animate-pulse shrink-0" />
              <p className="text-xs text-ocean-dark font-medium">
                <span className="font-bold">Próximamente</span> · Estamos por subir fotos y videos del proyecto. ¡Seguinos para no perderte nada!
              </p>
            </div>

            {/* Placeholder Grid — 6 posts */}
            <div className="grid grid-cols-3 gap-1.5 max-w-xs">
              {PLACEHOLDER_POSTS.map((post, i) => (
                <motion.a
                  key={i}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-ocean-deep to-ocean-dark group cursor-pointer"
                >
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, #C4924A 0px, #C4924A 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #C4924A 0px, #C4924A 1px, transparent 1px, transparent 30px)' }}
                  />

                  {/* Shimmer animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    style={{ animation: `shimmer ${1.5 + i * 0.2}s ease-in-out ${i * 0.15}s infinite alternate` }}
                  />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-ocean-soft/30 flex items-center justify-center">
                      {post.type === 'video'
                        ? <FaPlay className="w-4 h-4 text-ocean-soft ml-0.5" />
                        : <FaImage className="w-4 h-4 text-ocean-soft" />
                      }
                    </div>
                    <span className="text-[8px] uppercase tracking-wider text-ocean-soft/70 text-center px-2 font-medium leading-tight">
                      {post.label}
                    </span>
                  </div>

                  {/* Type badge */}
                  {post.type === 'video' && (
                    <div className="absolute top-2 right-2">
                      <span className="text-[8px] bg-white/15 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                        VIDEO
                      </span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>

            {/* View profile CTA */}
            <div className="mt-6 text-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-semibold text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
                <span>Ver perfil en Instagram</span>
              </a>
              <p className="mt-3 text-xs text-sand-muted font-light">
                Fotos y videos del proyecto estarán disponibles próximamente
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
