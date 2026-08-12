import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaMagnifyingGlassPlus } from 'react-icons/fa6';
import { FLOOR_PLANS } from '../../data/planos';

export default function FloorPlans() {
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const [lightboxPlan, setLightboxPlan] = useState(null);

  const activePlan = FLOOR_PLANS[selectedFloorIndex] || FLOOR_PLANS[0];

  return (
    <section id="plantas" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, #6B4C32 0px, #6B4C32 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #6B4C32 0px, #6B4C32 1px, transparent 1px, transparent 60px)' }}
      />

      <div className="w-full px-6 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-ocean-light mb-3">
            Distribución Arquitectónica
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-ocean-dark tracking-tight leading-tight mb-4">
            Plantas
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Explorá la distribución espacial de cada nivel. Seleccioná el piso para visualizar su plano arquitectónico correspondiente.
          </p>
          <div className="mt-6 mx-auto w-16 h-[2px] bg-ocean-light" />
        </div>

        {/* Active Floor Main Showcase — large plan on top */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan.piso}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="w-full rounded-3xl overflow-hidden shadow-2xl bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 mb-10"
          >
            {/* Left Column: Interactive Image Plan */}
            <div
              className="lg:col-span-7 bg-[#2A1D13] p-8 sm:p-12 relative flex items-center justify-center cursor-pointer group min-h-[420px]"
              onClick={() => setLightboxPlan(activePlan)}
            >
              <img
                src={activePlan.imagen.replace('.jpg', '.svg')}
                alt={`Plano ${activePlan.nombre}`}
                className="max-h-[520px] w-full object-contain group-hover:scale-105 transition-transform duration-700"
                onError={e => { e.target.src = activePlan.imagen; }}
              />

              {/* Hover Expand Badge */}
              <div className="absolute inset-0 bg-ocean-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="w-14 h-14 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-xl">
                    <FaMagnifyingGlassPlus className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Ampliar Plano</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-white">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-ocean-light">
                    {activePlan.subtitulo}
                  </span>
                  <span className="text-xs font-serif font-bold text-ocean-medium bg-sand px-3 py-1 rounded-full">
                    Piso {activePlan.piso}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-ocean-dark mb-4">
                  {activePlan.nombre}
                </h3>

                <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                  {activePlan.descripcion}
                </p>

                {activePlan.ambientes && (
                  <div className="space-y-2 mb-6">
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-sand-muted">
                      Espacios & Ambientes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activePlan.ambientes.map(amb => (
                        <span
                          key={amb}
                          className="px-3 py-1.5 rounded-xl bg-sand text-ocean-dark text-xs font-semibold"
                        >
                          {amb}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-4 border-t border-sand-dark/30">
                <button
                  onClick={() => setLightboxPlan(activePlan)}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-ocean-dark hover:bg-ocean-medium text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-md transition-all cursor-pointer"
                >
                  <FaMagnifyingGlassPlus className="w-4 h-4" />
                  <span>Ver en alta resolución</span>
                </button>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floor Selection Pills — below the plan */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FLOOR_PLANS.map((plan, index) => {
            const isActive = selectedFloorIndex === index;
            return (
              <button
                key={plan.piso}
                onClick={() => setSelectedFloorIndex(index)}
                className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer ${isActive
                  ? 'bg-ocean-dark text-white shadow-lg scale-105 border-2 border-ocean-light'
                  : 'bg-sand text-ocean-dark hover:bg-sand-dark/60 border border-sand-dark/40'
                  }`}
              >
                {plan.nombre}
              </button>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ocean-deep/97 backdrop-blur-md flex items-center justify-center p-4 sm:p-12"
            onClick={() => setLightboxPlan(null)}
          >
            <button
              onClick={() => setLightboxPlan(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <FaXmark className="w-5 h-5" />
            </button>

            <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <div className="mb-4 text-center">
                <h3 className="font-serif text-3xl font-bold text-white">{lightboxPlan.nombre}</h3>
                <p className="text-ocean-light text-xs uppercase tracking-[0.3em] mt-1">{lightboxPlan.subtitulo}</p>
              </div>

              <div className="bg-ocean-dark/60 rounded-2xl border border-ocean-light/20 p-6 overflow-auto max-h-[70vh] flex items-center justify-center">
                <img
                  src={lightboxPlan.imagen.replace('.jpg', '.svg')}
                  alt={`Plano ampliado ${lightboxPlan.nombre}`}
                  className="max-h-[60vh] object-contain rounded-xl"
                  onError={e => { e.target.src = lightboxPlan.imagen; }}
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
