import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaChevronLeft, FaChevronRight, FaExpand, FaMagnifyingGlassPlus, FaMagnifyingGlassMinus, FaArrowsRotate } from 'react-icons/fa6';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/fotos/hero.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Portada & Entorno Victor Hugo',
    category: 'Perspectiva Exterior'
  },
  {
    id: 2,
    src: '/fotos/edificio.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Fachada & Vista Principal del Proyecto',
    category: 'Arquitectura'
  },
  {
    id: 3,
    src: '/fotos/espacios_confort.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Espacios & Confort Interior',
    category: 'Interiores'
  },
  {
    id: 4,
    src: '/fotos/frente_1.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Frente & Acceso Nivel Calle',
    category: 'Fachada'
  },
  {
    id: 5,
    src: '/fotos/frente_2.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Elevación & Entorno Arbolado',
    category: 'Exterior'
  },
  {
    id: 6,
    src: '/fotos/foto_1.png',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Perspectiva General del Edificio',
    category: 'Diseño Contemporáneo'
  },
  {
    id: 7,
    src: '/fotos/interior-01.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Detalle de Iluminación & Ventanales',
    category: 'Detalles'
  },
  {
    id: 8,
    src: '/fotos/interior-02.jpg',
    fallbackSrc: '/fotos/hero.jpg',
    title: 'Distribución de Ambientes & Integración',
    category: 'Ambientes'
  }
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // ─── Carousel drag state ───────────────────────────────────────────────────
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const didDrag = useRef(false);

  const onTrackMouseDown = (e) => {
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.clientX;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.userSelect = 'none';
  };

  const onTrackMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    trackRef.current.scrollLeft = scrollStartLeft.current - dx;
  }, []);

  const onTrackMouseUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
      trackRef.current.style.userSelect = '';
    }
  }, []);

  const scrollLeft = () => {
    if (trackRef.current) trackRef.current.scrollBy({ left: -480, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (trackRef.current) trackRef.current.scrollBy({ left: 480, behavior: 'smooth' });
  };

  const openLightbox = (index) => {
    if (!didDrag.current) setSelectedIndex(index);
  };
  const closeLightbox = () => {
    setSelectedIndex(null);
    resetZoom();
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    resetZoom();
  };
  const showPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    resetZoom();
  };

  // ─── Lightbox zoom & pan state ─────────────────────────────────────────────
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOrigin = useRef({ x: 0, y: 0 });

  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const clampPan = (newPan, currentZoom) => {
    const maxOffset = (currentZoom - 1) * 200;
    return {
      x: Math.max(-maxOffset, Math.min(maxOffset, newPan.x)),
      y: Math.max(-maxOffset, Math.min(maxOffset, newPan.y)),
    };
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
    setZoom((prev) => {
      const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev + delta));
      if (next === MIN_ZOOM) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleImgMouseDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    isPanning.current = true;
    panStart.current = { x: e.clientX, y: e.clientY };
    panOrigin.current = { ...pan };
  };

  const handleImgMouseMove = useCallback((e) => {
    if (!isPanning.current) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    setPan(clampPan({ x: panOrigin.current.x + dx, y: panOrigin.current.y + dy }, zoom));
  }, [zoom]);

  const handleImgMouseUp = useCallback(() => {
    isPanning.current = false;
  }, []);

  // Touch pinch-to-zoom
  const lastTouchDist = useRef(null);
  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastTouchDist.current !== null) {
        const delta = (dist - lastTouchDist.current) * 0.01;
        setZoom((prev) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev + delta)));
      }
      lastTouchDist.current = dist;
    }
  };
  const handleTouchEnd = () => { lastTouchDist.current = null; };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex]);

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-sand-light/60 via-white to-sand-light/40 relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-6 lg:px-16">

        {/* Header with Nav Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-ocean-light block mb-2">
              Recorrido Fotográfico Completo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ocean-dark tracking-tight">
              Galería de Imágenes
            </h2>
          </div>

          {/* Controls Left / Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full bg-white border border-sand-dark/40 text-ocean-dark hover:bg-ocean-light hover:text-white transition-all flex items-center justify-center shadow-lg hover:scale-105 cursor-pointer z-10"
              aria-label="Deslizar a la izquierda"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 rounded-full bg-white border border-sand-dark/40 text-ocean-dark hover:bg-ocean-light hover:text-white transition-all flex items-center justify-center shadow-lg hover:scale-105 cursor-pointer z-10"
              aria-label="Deslizar a la derecha"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Draggable Horizontal Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto py-4 scroll-smooth snap-x snap-mandatory focus:outline-none select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: 'grab' }}
          onMouseDown={onTrackMouseDown}
          onMouseMove={onTrackMouseMove}
          onMouseUp={onTrackMouseUp}
          onMouseLeave={onTrackMouseUp}
        >
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="snap-start shrink-0 w-[320px] sm:w-[460px] md:w-[540px] h-[340px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl border-2 border-white bg-ocean-dark"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                onError={(e) => { e.target.src = item.fallbackSrc; }}
              />

              {/* Gradient Overlay & Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-ocean-soft mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-sand-light font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaExpand className="w-3.5 h-3.5 text-ocean-soft" />
                  <span>Ampliar imagen</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Lightbox Modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
            onMouseMove={handleImgMouseMove}
            onMouseUp={handleImgMouseUp}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <FaXmark className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Imagen anterior"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div
              className="max-w-6xl max-h-[85vh] relative flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image with zoom & pan — entry animation on wrapper div, zoom/pan on img */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl shadow-2xl"
                style={{ maxWidth: '100%', maxHeight: '72vh' }}
                onWheel={handleWheel}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={GALLERY_IMAGES[selectedIndex].src}
                  alt={GALLERY_IMAGES[selectedIndex].title}
                  draggable={false}
                  onMouseDown={handleImgMouseDown}
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                    transition: isPanning.current ? 'none' : 'transform 0.2s ease',
                    cursor: zoom > 1 ? (isPanning.current ? 'grabbing' : 'grab') : 'zoom-in',
                    maxWidth: '100%',
                    maxHeight: '72vh',
                    objectFit: 'contain',
                    display: 'block',
                    userSelect: 'none',
                    transformOrigin: 'center center',
                  }}
                  onError={(e) => { e.target.src = GALLERY_IMAGES[selectedIndex].fallbackSrc; }}
                />
              </motion.div>

              {/* Zoom Controls */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); setZoom((z) => { const next = Math.max(MIN_ZOOM, z - ZOOM_STEP); if (next <= 1) setPan({ x: 0, y: 0 }); return next; }); }}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  title="Alejar"
                >
                  <FaMagnifyingGlassMinus className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP)); }}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  title="Acercar"
                >
                  <FaMagnifyingGlassPlus className="w-5 h-5" />
                </button>

                {zoom > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer ml-1"
                    title="Restablecer zoom"
                  >
                    <FaArrowsRotate className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Caption */}
              <div className="mt-2 text-center text-foam space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-ocean-soft">
                  {GALLERY_IMAGES[selectedIndex].category} • ({selectedIndex + 1} / {GALLERY_IMAGES.length})
                </span>
                <h4 className="text-xl font-serif font-bold text-white">
                  {GALLERY_IMAGES[selectedIndex].title}
                </h4>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Imagen siguiente"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
