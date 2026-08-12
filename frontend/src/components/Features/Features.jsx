import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaRulerCombined, FaCheck, FaWhatsapp } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

export default function Features() {
  return (
    <section id="destacado" className="w-full min-h-[600px] bg-[#F7F4EE] overflow-hidden">
      
      {/* ── 1. Full-Width Edge-to-Edge Grid (7 Cols Left / 5 Cols Right) ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

        {/* ── 2. LEFT SIDE: Edge-to-Edge Media Render (7 Cols Desktop) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative h-full min-h-[500px] sm:min-h-[580px] lg:min-h-[650px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden group bg-[#1C1A17]"
        >
          {/* Background Render - Full Height Edge to Edge */}
          <img
            src="/fotos/edificio.jpg"
            alt="Victor Hugo - Edificio en Ostende"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Progressive Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60 pointer-events-none" />

          {/* Top Badges Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
            {/* Top Left: Floating Glassmorphic Badge with Pulsing Golden Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B59461] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B59461]" />
              </span>
              <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.3em] text-white">
                VICTOR HUGO • OSTENDE
              </span>
            </div>

            {/* Top Right: Bronze/Gold Badge */}
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#B59461] to-[#9E7B4F] text-white text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-lg">
              DESARROLLO EN POZO
            </div>
          </div>

          {/* Bottom Overlaid Glassmorphism Info Pill */}
          <div className="relative z-10 w-full pt-8">
            <div className="bg-[#1C1A17]/85 backdrop-blur-md border border-[#9E7B4F]/30 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 max-w-xl">
              
              {/* Money / Financing */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#9E7B4F]/20 border border-[#9E7B4F]/40 flex items-center justify-center shrink-0">
                  <FaCoins className="w-4 h-4 text-[#B59461]" />
                </div>
                <div>
                  <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B59461]">
                    Financiación Comercial
                  </span>
                  <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                    50% de anticipo • resto en cuotas
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10" />

              {/* Ruler / Architecture */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#9E7B4F]/20 border border-[#9E7B4F]/40 flex items-center justify-center shrink-0">
                  <FaRulerCombined className="w-4 h-4 text-[#B59461]" />
                </div>
                <div>
                  <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B59461]">
                    Superficies Flexibles
                  </span>
                  <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                    Desde 55 m² propios
                  </span>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* ── 3. RIGHT SIDE: Integrated Content on Cream Background (5 Cols Desktop) ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="lg:col-span-5 px-8 md:px-12 lg:px-16 py-12 lg:py-16 flex flex-col justify-center bg-[#F7F4EE]"
        >
          {/* Header */}
          <div className="space-y-3 mb-8">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.35em] text-[#9E7B4F] block">
              LUJO & FUNCIONALIDAD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight leading-[1.15]">
              Departamentos y Oficinas Premium
            </h2>
            <p className="font-sans text-sm sm:text-base font-medium text-[#6E6359] tracking-wide">
              En el corazón de Ostende
            </p>
            <div className="w-16 h-[2px] bg-[#9E7B4F] mt-4" />
          </div>

          {/* Checklist of Benefits on Light Background */}
          <div className="space-y-6 mb-10">
            
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#9E7B4F]/10 border border-[#9E7B4F]/30 flex items-center justify-center shrink-0 mt-0.5">
                <FaCheck className="w-3 h-3 text-[#9E7B4F]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-sans font-bold text-[#2C241D] leading-tight">
                  Alta rentabilidad anual
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6359] font-light mt-0.5 leading-relaxed">
                  Ideal para alquiler temporal en zona turística de alta demanda.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#9E7B4F]/10 border border-[#9E7B4F]/30 flex items-center justify-center shrink-0 mt-0.5">
                <FaCheck className="w-3 h-3 text-[#9E7B4F]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-sans font-bold text-[#2C241D] leading-tight">
                  Revalorización garantizada
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6359] font-light mt-0.5 leading-relaxed">
                  Sólida plusvalía desde la etapa de pozo.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#9E7B4F]/10 border border-[#9E7B4F]/30 flex items-center justify-center shrink-0 mt-0.5">
                <FaCheck className="w-3 h-3 text-[#9E7B4F]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-sans font-bold text-[#2C241D] leading-tight">
                  Ubicación privilegiada
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6359] font-light mt-0.5 leading-relaxed">
                  Sobre la avenida principal de Ostende, a minutos de la playa y del centro de Pinamar.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#9E7B4F]/10 border border-[#9E7B4F]/30 flex items-center justify-center shrink-0 mt-0.5">
                <FaCheck className="w-3 h-3 text-[#9E7B4F]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-sans font-bold text-[#2C241D] leading-tight">
                  Calidad constructiva premium
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6359] font-light mt-0.5 leading-relaxed">
                  Materiales de categoría, amplias aberturas y confort acústico/térmico.
                </p>
              </div>
            </div>

          </div>

          {/* ── 4. Prominent Action Button ── */}
          <div>
            <a
              href={PROJECT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-xl bg-gradient-to-r from-[#B59461] to-[#9E7B4F] hover:from-[#9E7B4F] hover:to-[#B59461] text-white font-sans font-extrabold text-xs sm:text-sm uppercase tracking-[0.15em] shadow-lg shadow-[#9E7B4F]/25 hover:shadow-[#9E7B4F]/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>CONSULTAR DISPONIBILIDAD Y PRECIOS</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
