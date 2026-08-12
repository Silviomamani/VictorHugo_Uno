import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectIntro() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F4EE] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4924A]/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DDD0BB]/20 rounded-full blur-3xl -z-0" />

      <div className="w-full px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.35em] font-semibold text-[#9E7B4F]">
            Ostende • Pinamar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C241D] tracking-tight leading-tight">
            Innovación, diseño y funcionalidad en una ubicación privilegiada
          </h2>
          <p className="text-base sm:text-lg text-[#6E6359] font-light leading-relaxed max-w-3xl mx-auto pt-2">
            Un proyecto de vanguardia concebido para ofrecer espacios de trabajo y vivienda de categoría sobre el principal eje de Ostende. Su arquitectura equilibrada combina presencia institucional, la calidez del paisaje arbolado y el máximo confort espacial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
