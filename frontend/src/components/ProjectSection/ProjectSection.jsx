import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  return (
    <section id="proyecto" className="py-24 bg-gradient-to-b from-white via-sand-light/50 to-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-6 lg:px-16 space-y-24">
        
        {/* Editorial Block 1: Main Architecture Concept (Foto_Proyecto) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-ocean-dark aspect-[16/10]">
              <img
                src="/fotos/edificio.jpg"
                alt="Edificio Victor Hugo - Foto Proyecto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-ocean-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Architectural Label Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-6 rounded-xl shadow-xl border border-sand-dark/40">
              <span className="text-xs uppercase tracking-[0.25em] text-ocean-light font-bold block mb-1">
                Estructura & Elevación
              </span>
              <span className="text-sm font-serif font-bold text-ocean-dark">
                Desarrollo en 4 Niveles
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-ocean-light">
              El Proyecto
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-ocean-dark tracking-tight leading-snug">
              Una implantación pensada para disfrutar el horizonte
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Emplazado en una ubicación estratégica sobre Av. Víctor Hugo 1249, este desarrollo de 4 pisos fusiona la sofisticación contemporánea con la tranquilidad del entorno natural de Ostende.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              Con una arquitectura de líneas puras, grandes aberturas y terrazas integradas, el edificio invita a disfrutar de vistas despejadas al horizonte, excelente ventilación cruzada y una iluminación natural privilegiada durante todo el día.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              Un proyecto pensado tanto para quienes buscan un espacio de trabajo/vivienda de vanguardia, como para quienes priorizan el confort, la serenidad y la cercanía al mar.
            </p>
          </motion.div>
        </div>

        {/* Editorial Block 2: Interior spaces & Confort (Espacios_Confort) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:order-1 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-ocean-light">
              Espacios & Confort
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-ocean-dark tracking-tight leading-snug">
              Ambientes luminosos y conectividad visual
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              El diseño arquitectónico prioriza la amplitud espacial, la optimización de los recorridos interiores y una conexión fluida entre los ambientes de trabajo/estares y la calidez del entorno natural exterior.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              A través de un estudio minucioso de la orientación, cada sector se beneficia de una iluminación natural óptima durante todo el día, reduciendo el consumo energético y generando atmósferas de trabajo agradables y de alto rendimiento.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              La selección de materiales nobles, el sistema de calefacción por losa radiante, los revestimientos de primera calidad y el equipamiento técnico garantizan un confort térmico superior y una excelente durabilidad frente al clima marítimo, combinando bajo mantenimiento con una imagen corporativa sobria y elegante.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl bg-ocean-dark aspect-[4/3] sm:aspect-[4/5] relative group">
              <img
                src="/fotos/espacios_confort.jpg"
                alt="Espacios y Confort Victor Hugo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-xl text-xs font-serif font-bold text-ocean-dark shadow-md">
                Espacios & Confort
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl bg-ocean-dark aspect-[4/3] sm:aspect-[4/5] relative group sm:translate-y-6">
              <img
                src="/fotos/frente_1.jpg"
                alt="Perspectiva Victor Hugo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-xl text-xs font-serif font-bold text-ocean-dark shadow-md">
                Perspectiva Exterior
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
