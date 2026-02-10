// src/components/Hero.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// 1. Importamos el GIF desde la carpeta assets
// Vite se encargará de procesar la ruta correcta
import heroBackground from '../assets/Animacion.gif';

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // 2. Usamos la variable importada aquí dentro de `url()`
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay oscuro (importante para que se lea el texto sobre el GIF) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Puedes ajustar la opacidad (0.6) si el GIF es muy claro u oscuro
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          Servicio Especializado
        </Typography>

        <Typography variant="h5" component="p" sx={{ mb: 4, fontWeight: 300 }}>
          Kadmiel S.M. - Asesoría técnica, instalación y mantenimiento.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="#services"
          sx={{ mr: 2, px: 4, py: 1.5, fontSize: '1.1rem' }}
        >
          Nuestros Servicios
        </Button>

        <Button
          variant="outlined"
          size="large"
          href="#contact"
          sx={{
            color: '#fff',
            borderColor: '#fff',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': { borderColor: '#ddd', backgroundColor: 'rgba(255,255,255,0.1)' }
          }}
        >
          Contáctanos
        </Button>
      </Container>
    </Box>
  );
}