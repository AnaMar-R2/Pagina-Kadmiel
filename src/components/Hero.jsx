// src/components/Hero.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import heroBackground from '../assets/Animacion.gif';
import logotipo from '../assets/Logotipo.svg';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

/**
 * Componente Hero inspirado en estilo "Startup".
 * Presenta un logo grande, mensaje impactante y un overlay degradado sobre el GIF.
 */
export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        height: '100vh', // Aumentamos a pantalla completa para el estilo Startup
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        overflow: 'hidden'
      }}
    >
      {/* 
        Overlay degradado: 
        Inspirado en la imagen, crea un bloque de color en el lado izquierdo 
        que se desvanece hacia el GIF en el lado derecho.
      */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 31, 63, 0.9) 0%, rgba(0, 31, 63, 0.4) 50%, rgba(0, 31, 63, 0) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '600px' }, textAlign: 'left' }}>

          {/* Logotipo Grande en el Hero */}
          <Box sx={{ mb: 4 }}>
            <img
              src={logotipo}
              alt="Kadmiel Corp"
              style={{
                width: '100%',
                maxWidth: '280px',
                filter: 'drop-shadow(0px 4px 15px rgba(255,255,255,0.2))'
              }}
            />
          </Box>

          {/* Mensaje de Presentación */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              lineHeight: 1.1,
              fontSize: { xs: '2.5rem', md: '3.8rem' },
              textShadow: '0px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            SOLUCIONES TECNOLÓGICAS CON PROPÓSITO
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 5,
              fontWeight: 300,
              opacity: 0.9,
              maxWidth: '500px',
              fontSize: { xs: '1.1rem', md: '1.4rem' }
            }}
          >
            Servicio profesional de asesoría técnica e instalaciones garantizadas.
          </Typography>

          {/* Botones de acción directos */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="#services"
              sx={{
                backgroundColor: '#1976d2',
                px: 3,
                py: 2,
                fontSize: '0.9rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#1565c0' }
              }}
            >
              Nuestros Servicios
            </Button>

            <Button
              variant="contained"
              size="large"
              component="a"
              href="/brochure-kadmiel.pdf"
              download="brochure-kadmiel.pdf"
              startIcon={<CloudDownloadIcon />}
              sx={{
                backgroundColor: '#0c6a0b',
                px: 3,
                py: 2,
                fontSize: '0.9rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#095408' }
              }}
            >
              Descargar Brochure
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                px: 3,
                py: 2,
                fontSize: '0.9rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                borderWidth: '2px',
                '&:hover': { borderWidth: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Contáctanos
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}