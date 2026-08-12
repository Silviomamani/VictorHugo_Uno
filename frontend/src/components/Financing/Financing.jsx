import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaWhatsapp, FaCoins, FaHandshakeSimple, FaFileContract } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

export default function Financing() {
  const benefits = [
    "Financiación directa con el desarrollador",
    "Planes a medida, adaptados a cada comprador",
    "Sin bancos ni trámites de crédito hipotecario"
  ];

  return (
    <section id="financiacion" className="py-20 lg:py-24 bg-[#F5F2EC] text-[#2C241D] relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9E7B4F]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B59461]/8 rounded-full blur-[100px]" />
      </div>

      <div className="w-full px-6 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT COLUMN: Text Content & Checklist ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E7B4F]/10 border border-[#9E7B4F]/25 text-[#9E7B4F]">
              <FaCoins className="w-3.5 h-3.5" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.25em]">
                FINANCIACIÓN
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C241D] leading-[1.15]">
              Comprá con Financiación Directa del Desarrollador
            </h2>

            {/* Paragraph */}
            <p className="font-sans text-[#6E6359] text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              Este proyecto todavía admite financiación. Definimos juntos un plan de pago que se ajuste a tu situación, sin bancos y sin trámites de crédito hipotecario.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#9E7B4F]/15 border border-[#9E7B4F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#9E7B4F] transition-colors duration-300">
                    <FaCheck className="w-3 h-3 text-[#9E7B4F] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-sans text-sm sm:text-base text-[#2C241D] font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-4">
              <a
                href={PROJECT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#B59461] to-[#9E7B4F] hover:from-[#9E7B4F] hover:to-[#B59461] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.15em] shadow-lg shadow-[#9E7B4F]/20 hover:shadow-[#9E7B4F]/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>CONSULTAR PLAN A MEDIDA</span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Elegant Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-[#9E7B4F]/25 shadow-xl space-y-6 overflow-hidden group">
              
              {/* Top Card Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#9E7B4F]/10 border border-[#9E7B4F]/20 flex items-center justify-center text-[#9E7B4F]">
                <FaHandshakeSimple className="w-7 h-7 text-[#9E7B4F]" />
              </div>

              {/* Card Text */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#2C241D] tracking-tight">
                  Flexibilidad Garantizada
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#6E6359] leading-relaxed font-light">
                  Adaptamos los plazos a la medida de cada comprador. Invertí en pozo con total tranquilidad y respaldo contractual directo.
                </p>
              </div>

              <div className="w-full h-[1px] bg-stone-200 my-4" />

              {/* Bottom tag */}
              <div className="flex items-center gap-2 text-[#6E6359] text-xs font-medium">
                <FaFileContract className="w-4 h-4 text-[#9E7B4F]" />
                <span>Trato directo y sin comisiones intermedias</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
