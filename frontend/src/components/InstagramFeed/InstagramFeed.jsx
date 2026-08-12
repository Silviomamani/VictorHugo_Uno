import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaArrowUpRightFromSquare, FaHeart, FaComment } from 'react-icons/fa6';
import { PROJECT_INFO } from '../../data/proyecto';

// Fallback posts in case the API is offline or token expires
const MOCK_POSTS = [
  {
    id: 'mock_1',
    media_url: '/fotos/hero.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Viví frente al horizonte en Victor Hugo. Espacios diseñados con máxima elegancia en Pinamar/Ostende. 🌊✨ #Pinamar #DesarrolloInmobiliario',
  },
  {
    id: 'mock_2',
    media_url: '/fotos/edificio.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Avanzan las obras en Av. Victor Hugo 1249. Cada detalle pensado para tu confort. 🏢🌴 #VictorHugo #Arquitectura',
  },
  {
    id: 'mock_3',
    media_url: '/fotos/espacios_confort.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Interiores luminosos e integrados. Calidad de vida costera durante todo el año. ☀️🏡',
  },
  {
    id: 'mock_4',
    media_url: '/fotos/frente_1.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Financiación directa del desarrollador. Planes a tu medida sin intermediarios bancarios. 🔑💼',
  },
  {
    id: 'mock_5',
    media_url: '/fotos/frente_2.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Ubicación privilegiada rodeada de entorno natural y pinos marítimos. 🌲🏖️',
  },
  {
    id: 'mock_6',
    media_url: '/fotos/interior-01.jpg',
    permalink: PROJECT_INFO.instagramLink,
    caption: 'Consultá por unidades disponibles y sumate a Victor Hugo Pinamar. 📱💬',
  },
];

export default function InstagramFeed() {
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
          // Process items (use thumbnail_url if it's a video)
          const formattedPosts = data.data.map((item) => ({
            id: item.id,
            media_url: item.media_type === 'VIDEO' ? (item.thumbnail_url || item.media_url) : item.media_url,
            permalink: item.permalink || PROJECT_INFO.instagramLink,
            caption: item.caption || 'Publicación en Instagram @victorhugo_uno',
          }));
          setPosts(formattedPosts);
          setIsLive(true);
        } else {
          // Fallback if API returned error or empty array
          if (isMounted) setPosts(MOCK_POSTS);
        }
      } catch (err) {
        console.warn('No se pudo conectar a la API de Instagram, usando contenido de reserva:', err);
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
    <section id="instagram" className="py-20 lg:py-24 bg-white text-[#2C241D] relative overflow-hidden">
      <div className="w-full px-6 lg:px-24 xl:px-32 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 border border-pink-500/20 text-pink-600">
              <FaInstagram className="w-4 h-4 text-pink-600" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.25em]">
                {PROJECT_INFO.instagramHandle}
              </span>
              {isLive && (
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  En vivo
                </span>
              )}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C241D]">
              Seguinos en Instagram
            </h2>

            <p className="font-sans text-[#6E6359] text-sm sm:text-base font-light max-w-2xl leading-relaxed">
              Enterate de los avances de obra, novedades del proyecto y el estilo de vida frente al mar en tiempo real.
            </p>
          </div>

          {/* Follow Button CTA */}
          <a
            href={PROJECT_INFO.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.15em] shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <FaInstagram className="w-5 h-5 text-white" />
            <span>Seguir a {PROJECT_INFO.instagramHandle}</span>
            <FaArrowUpRightFromSquare className="w-3.5 h-3.5 text-white/90 ml-0.5" />
          </a>
        </div>

        {/* 6 Posts Grid (2 rows x 3 columns) */}
        {loading ? (
          /* Skeleton Loader */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-2xl bg-stone-100 animate-pulse border border-stone-200"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.slice(0, 6).map((post, idx) => (
              <motion.a
                key={post.id || idx}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer block"
              >
                {/* Image */}
                <img
                  src={post.media_url}
                  alt={post.caption || 'Publicación Instagram Victor Hugo'}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.src = MOCK_POSTS[idx % MOCK_POSTS.length].media_url;
                  }}
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between text-white z-10">
                  
                  {/* Top Bar on Hover */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium tracking-wide">
                      <FaInstagram className="w-3.5 h-3.5 text-pink-400" />
                      <span>Instagram</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Caption on Hover */}
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-sans line-clamp-3 leading-relaxed text-stone-100/90 font-light">
                      {post.caption}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-semibold text-pink-300 pt-1">
                      <span className="flex items-center gap-1">
                        <FaHeart className="w-3.5 h-3.5 text-pink-400" /> Ver en Instagram
                      </span>
                    </div>
                  </div>

                </div>
              </motion.a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
