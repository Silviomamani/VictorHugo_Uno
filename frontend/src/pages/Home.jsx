import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ProjectIntro from '../components/ProjectIntro/ProjectIntro';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Features from '../components/Features/Features';
import Amenities from '../components/Amenities/Amenities';
import FloorPlans from '../components/FloorPlans/FloorPlans';
import Gallery from '../components/Gallery/Gallery';
import Location from '../components/Location/Location';
import Financing from '../components/Financing/Financing';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-sand-light text-stone-800 selection:bg-ocean-light selection:text-white font-sans transition-colors duration-300 relative overflow-x-hidden">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Frase introductoria */}
      <ProjectIntro />

      {/* Espacio publicitario Full-Width: Departamentos y Oficinas Premium */}
      <Features />

      {/* Editorial Project Overview */}
      <ProjectSection />

      {/* Amenities Section */}
      <Amenities />

      {/* Floor Plans Interactive Section */}
      <FloorPlans />

      {/* Masonry Gallery with Lightbox */}
      <Gallery />

      {/* Location & Map Section */}
      <Location />

      {/* Financing Banner Section */}
      <Financing />

      {/* Contact Section & Form */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
