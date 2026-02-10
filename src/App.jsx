// src/App.jsx
import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About'; 
import Footer from './components/Footer';// <--- Importamos About

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Services />
      
      {/* Sección Nosotros */}
      <About />
      <Footer />
      
    </>
  );
}

export default App;