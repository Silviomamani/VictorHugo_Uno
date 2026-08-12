import React from 'react';
import { motion } from 'framer-motion';

const AMENITIES = [
  {
    title: "Solárium & Terraza",
    subtitle: "TERRAZA EXCLUSIVA",
    description: [
      "Proyectado como un mirador privado en la cima del edificio, este nivel combina la comodidad de una ubicación céntrica con el contacto directo con la naturaleza y el aire libre.",
      "Su elevación permite contemplar la copa de los pinos y el horizonte de Ostende desde un entorno resguardado, transformando la terraza en un punto de encuentro distintivo y versátil.",
      "Un espacio pensado para potenciar el bienestar de los usuarios, equipado para el disfrute en cualquier época del año."
    ],
    image: "/fotos/interior-01.jpg",
    tag: "Espacios Exteriores",
  },
  {
    title: "Parrillas & SUM",
    subtitle: "ESPACIOS DE ENCUENTRO",
    description: [
      "Un espacio exclusivo proyectado para enriquecer la experiencia de uso del edificio, ofreciendo un lugar amplio y resguardado para celebrar, conectar o relajarse sin salir del complejo.",
      "Su distribución fluida hacia los sectores descubiertos garantiza ventilación cruzada, excelente iluminación natural y una articulación perfecta entre las zonas de cocción y el área de estar."
    ],
    image: "/fotos/interior-02.jpg",
    tag: "Vida Social",
    reverse: true,
  },
  {
    title: "Oficinas Premium & Workspace",
    subtitle: "ESPACIOS DE TRABAJO",
    description: [
      "Un desarrollo concebido para empresas, profesionales y firmas que buscan proyectar una imagen corporativa de primer nivel en la mejor ubicación céntrica de Ostende.",
      "Cada planta ofrece superficies adaptables con acabados de máxima categoría, excelente iluminación natural y una conexión visual fluida con el exterior, creando un entorno laboral sofisticado, confortable y de alta productividad.",
      "Equipadas con tecnología orientada a la eficiencia energética, aberturas de alta gama e instalaciones de vanguardia pensadas para garantizar el máximo rendimiento diario."
    ],
    image: "/fotos/espacios_confort.jpg",
    tag: "Naturaleza",
  },
  {
    title: "Estacionamiento Privado & Seguro",
    subtitle: "SERVICIOS DEL EDIFICIO",
    description: [
      "El edificio dispone de plazas de estacionamiento fijas y privadas dentro del predio, proyectadas para brindar la máxima comodidad, resguardo y practicidad a propietarios y usuarios en su rutina diaria.",
      "Diseñadas con un amplio radio de giro y espacios de maniobra optimizados, garantizan un ingreso y egreso ágil, cómodo y sin complicaciones para todo tipo de vehículos.",
      "Un sector pensado bajo elevados estándares de seguridad, delimitación perimetral e iluminación constante, ofreciendo un entorno totalmente protegido para el resguardo de tu vehículo durante todo el año."
    ],
    image: "/fotos/frente_2.jpg",
    tag: "Infraestructura",
    reverse: true,
  },
];

const SECURITY_ITEMS = [
  "Control de acceso electrónico en el ingreso principal y áreas comunes.",
  "Cámaras de videovigilancia (CCTV) en accesos, circulaciones y espacios comunes.",
  "Ascensor automático de última generación con parada en todos los niveles.",
  "Iluminación de emergencia LED automatizada en palieres y áreas de circulación.",
];

/* Variantes reutilizables */
const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 } },
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-[#F8F6F3] relative overflow-hidden">

      <div className="w-full px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-ocean-light mb-3">
            Equipamiento & Espacios Comunes
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-ocean-dark tracking-tight leading-tight mb-4">
            Amenities
          </h2>
          <p className="text-stone-500 text-sm font-light leading-relaxed">
            Propuesta preliminar de equipamiento diseñada para la máxima calidad de vida costera.
          </p>
          <div className="mt-6 mx-auto w-16 h-[2px] bg-ocean-light" />
        </div>

        {/* Amenities — Alternating Photo + Description */}
        <div className="flex flex-col gap-28 mb-32">
          {AMENITIES.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl ${item.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Photo */}
              <div className="relative h-[440px] sm:h-[540px] lg:h-[600px] overflow-hidden bg-stone-200">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={imgVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  onError={e => { e.target.src = '/fotos/edificio.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.35em] font-bold text-white/90 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Description */}
              <motion.div
                className="flex flex-col justify-center px-10 py-14 lg:px-16 lg:py-20 bg-white"
                variants={item.reverse ? { ...textVariants, hidden: { opacity: 0, x: -30 } } : textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
              >
                {item.subtitle !== null && (
                  <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-ocean-light mb-3">
                    {item.subtitle || "Amenity Proyectado"}
                  </span>
                )}
                <h3 className="font-serif text-4xl font-bold text-ocean-dark mb-5 leading-tight">
                  {item.title}
                </h3>
                {Array.isArray(item.description) ? (
                  <div className="space-y-4 text-stone-500 text-sm font-light leading-relaxed">
                    {item.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-stone-500 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                )}
                <div className="mt-8 w-10 h-[2px] bg-ocean-light" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ── SECURITY SECTION ── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Left: Large Photo */}
          <div className="relative h-[440px] sm:h-[540px] lg:h-[620px] overflow-hidden bg-stone-200">
            <motion.img
              src="/fotos/frente_1.jpg"
              alt="Seguridad y Accesos Victor Hugo"
              className="absolute inset-0 w-full h-full object-cover"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              onError={e => { e.target.src = '/fotos/edificio.jpg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/50 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.35em] font-bold text-white/90 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
              Tecnología & Protección
            </span>
          </div>

          {/* Right: Info */}
          <motion.div
            className="flex flex-col justify-center px-10 py-14 lg:px-16 lg:py-20 bg-white space-y-7"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div>
              <span className="block text-[10px] uppercase tracking-[0.4em] font-semibold text-ocean-light mb-2">
                TECNOLOGÍA & PROTECCIÓN
              </span>
              <h3 className="font-serif text-5xl font-bold text-ocean-dark tracking-tight leading-tight mb-4">
                Seguridad Integral
              </h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                El edificio contará con una infraestructura de protección y control de accesos diseñada para brindar la máxima tranquilidad, privacidad y confort a propietarios y usuarios.
              </p>
            </div>

            <ul className="space-y-3 pt-5 border-t border-sand-dark/20">
              {SECURITY_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 font-light">
                  <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-ocean-light shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
