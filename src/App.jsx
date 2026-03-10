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

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />

      {/* Sección Servicios */}
      <Services />

      {/* Sección Nosotros */}
      <About />

      {/* Sección Clientes */}
      <Clients />

      {/* Sección Contacto */}
      <Contact />

      <Footer />
    </>
  );
}

export default App;