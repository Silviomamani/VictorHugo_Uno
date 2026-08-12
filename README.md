# VICTOR HUGO — Sitio Web Inmobiliario

Sitio web exclusivo e inspirativo para el desarrollo inmobiliario **VICTOR HUGO**, ubicado en Av. Victor Hugo 1249 (entre Catamarca y Misiones), Pinamar / Ostende, Buenos Aires.

Proyecto **100% estático** — sin servidor ni base de datos. Todos los datos están hardcodeados en el frontend y las imágenes se sirven desde `/public/fotos/`.

---

## 🌊 Paleta de Colores "Océano / Ostende"
- **Azul profundo (`#1B3A4B`)**: Navbar, footer, fondo principal.
- **Celeste / Turquesa suave (`#7FB7BE`)**: Links, hovers, acentos y detalles.
- **Arena / Beige cálido (`#EDE6DA`)**: Fondo claro principal.
- **Blanco Espuma (`#F8FAFC`)**: Textos legibles sobre superficies oscuras.
- **Verde Pino Marítimo (`#2A5242`)**: Acento sutil secundario.

---

## 🛠️ Stack Tecnológico

- **React 18** + **Vite 6**
- **Tailwind CSS 3** (Paleta personalizada Océano/Ostende)
- **Framer Motion** (Animaciones fluidas y sutiles)
- **React Router DOM**
- **React Icons**

---

## 📁 Estructura del Proyecto

```
Victor Hugo_Uno/
└── frontend/
    ├── public/
    │   └── fotos/              ← Imágenes del proyecto
    │       └── planos/         ← SVG/JPG de planos por piso
    ├── src/
    │   ├── components/         ← Secciones del sitio (Hero, Gallery, FloorPlans, etc.)
    │   ├── context/
    │   │   └── ThemeContext.jsx
    │   ├── data/               ← Datos hardcodeados (editar acá para actualizar contenido)
    │   │   ├── proyecto.js     ← Info del proyecto: nombre, dirección, WhatsApp, stats
    │   │   └── planos.js       ← Planos por piso: imagen, descripción, ambientes
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── package.json
    └── tailwind.config.js
```

---

## 🚀 Instalación y Ejecución Local

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias npm
npm install

# Iniciar servidor de desarrollo Vite
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## ✏️ Cómo actualizar el contenido

### Cambiar info del proyecto (nombre, dirección, WhatsApp, etc.)
Editar [`src/data/proyecto.js`](./frontend/src/data/proyecto.js)

### Cambiar planos por piso
Editar [`src/data/planos.js`](./frontend/src/data/planos.js) y reemplazar las imágenes en `public/fotos/planos/`

### Agregar/cambiar fotos de la galería
1. Colocar las imágenes en `public/fotos/`
2. Editar el array `GALLERY_IMAGES` en [`src/components/Gallery/Gallery.jsx`](./frontend/src/components/Gallery/Gallery.jsx)

---

## 🌐 Deploy (Vercel / Netlify)

Al ser un proyecto 100% estático, el deploy es simple:

### Vercel
1. Importar el repositorio en [vercel.com](https://vercel.com)
2. Configurar:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy ✅

### Netlify
1. Importar en [netlify.com](https://netlify.com)
2. Configurar:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
3. Deploy ✅

---

## 🗺️ Google Maps (opcional)

Si se desea activar el mapa embebido en la sección Ubicación, agregar la clave en `frontend/.env`:

```env
VITE_GOOGLE_MAPS_API_KEY=tu_clave_aqui
```
