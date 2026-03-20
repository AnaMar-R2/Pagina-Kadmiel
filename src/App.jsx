// src/App.jsx
import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />

      {/* Sección Nosotros */}
      <About />

      {/* Sección Servicios */}
      <Services />

      {/* Sección Clientes */}
      <Clients />

      {/* Sección Proyectos CREAR */}
      <Projects />

      {/* Sección Contacto */}
      <Contact />

      <Footer />
    </>
  );
}

export default App;