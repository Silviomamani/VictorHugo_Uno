import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLocationDot, FaArrowUpRightFromSquare, FaHeart } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

const MOCK_POSTS = [
  {
    id: 'mock_1',
    media_url: '/fotos/hero.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Viví frente al horizonte en Victor Hugo. Espacios diseñados con máxima elegancia en Pinamar/Ostende.',
  },
  {
    id: 'mock_2',
    media_url: '/fotos/edificio.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Avanzan las obras en Av. Victor Hugo 1249. Cada detalle pensado para tu confort.',
  },
  {
    id: 'mock_3',
    media_url: '/fotos/espacios_confort.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Interiores luminosos e integrados. Calidad de vida costera durante todo el año.',
  },
  {
    id: 'mock_4',
    media_url: '/fotos/frente_1.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Financiación directa del desarrollador. Planes a tu medida sin intermediarios bancarios.',
  },
  {
    id: 'mock_5',
    media_url: '/fotos/frente_2.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Ubicación privilegiada rodeada de entorno natural y pinos marítimos.',
  },
  {
    id: 'mock_6',
    media_url: '/fotos/interior-01.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Consultá por unidades disponibles y sumate a Victor Hugo Pinamar.',
  },
];

export default function Contact() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchInstagramPosts() {
      const token =
        import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN ||
        'IGAAOO91WDenlBZAGF1LU9uNGhtMVQ0M2ZASMmhlcFRnQjhHeGJEeFJLU1ZAJakhRaFJ3VHRvWDRVU3lpUkF1QXNVWndrYlhFLWVJajMzcTRaenB0UXA5UzVtWkx1Qmp1T0wtQUpyQzMzWDlSSjliNVMxUkVLXzhraVd3TkdtQ1ZA3awZDZD';

      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}&limit=6`;
        const res = await fetch(url);
        const data = await res.json();

        if (isMounted && data && data.data && data.data.length > 0) {
          const formattedPosts = data.data.map((item) => ({
            id: item.id,
            media_url: item.media_type === 'VIDEO' ? (item.thumbnail_url || item.media_url) : item.media_url,
            permalink: item.permalink || PROJECT_INFO.instagramLink,
            caption: item.caption || 'Publicación en Instagram @victorhugo_uno',
          }));
          setPosts(formattedPosts);
          setIsLive(true);
        } else {
          if (isMounted) setPosts(MOCK_POSTS);
        }
      } catch (err) {
        console.warn('Usando contenido de reserva de Instagram:', err);
        if (isMounted) setPosts(MOCK_POSTS);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchInstagramPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-ocean-light/8" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-sand/70" />
      </div>

      <div className="w-full px-6 lg:px-24 xl:px-32 relative z-10">

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

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

          {/* ── RIGHT COLUMN: Real Instagram Feed (Compact Grid) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-stone-50/80 p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm"
          >
            {/* Instagram Header */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-200">
              <a
                href={PROJECT_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <FaInstagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl font-bold text-ocean-dark group-hover:text-ocean-medium transition-colors">
                      {PROJECT_INFO.instagramHandle}
                    </h3>
                    {isLive && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        En vivo
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 font-light mt-0.5">
                    Fotos y novedades en tiempo real
                  </p>
                </div>
              </a>

              <a
                href={PROJECT_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 text-ocean-dark hover:bg-gradient-to-r hover:from-[#833AB4] hover:to-[#FD1D1D] hover:text-white hover:border-transparent font-semibold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <FaInstagram className="w-3.5 h-3.5" />
                <span>Seguir</span>
              </a>
            </div>

            {/* Live Posts Grid — 6 compact cards (3 cols x 2 rows) */}
            {loading ? (
              <div className="grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-stone-200 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {posts.slice(0, 6).map((post, i) => (
                  <motion.a
                    key={post.id || i}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-stone-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer block"
                  >
                    <img
                      src={post.media_url}
                      alt={post.caption || 'Instagram Victor Hugo'}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.target.src = MOCK_POSTS[i % MOCK_POSTS.length].media_url;
                      }}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                      <div className="flex justify-end">
                        <FaArrowUpRightFromSquare className="w-3 h-3 text-white/90" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-sans line-clamp-2 text-stone-200 leading-tight">
                          {post.caption}
                        </p>
                        <div className="flex items-center gap-1 text-[9px] font-semibold text-pink-300">
                          <FaHeart className="w-2.5 h-2.5 text-pink-400" />
                          <span>Instagram</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-6 text-center">
              <a
                href={PROJECT_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-sans font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4 text-white" />
                <span>Ver más publicaciones en Instagram</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
