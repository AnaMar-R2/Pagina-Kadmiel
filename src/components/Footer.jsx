// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0a1929', color: 'white', pt: 8, pb: 4 }} component="footer" id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={5}>

          {/* Columna 1: Información de la Empresa */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontWeight: 'bold' }}>
              KADMIEL S.M.
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
              Especialistas en soluciones integrales de mantenimiento industrial, obras civiles y proyectos de ingeniería. Calidad y compromiso en cada servicio.
            </Typography>
            {/* Redes Sociales */}
            <Box>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="success" aria-label="WhatsApp">
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Columna 2: Enlaces Rápidos */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Enlaces Rápidos
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block" sx={{ mb: 1, color: '#ccc' }}>
              Inicio
            </Link>
            <Link href="#services" color="inherit" underline="hover" display="block" sx={{ mb: 1, color: '#ccc' }}>
              Servicios
            </Link>
            <Link href="#about" color="inherit" underline="hover" display="block" sx={{ mb: 1, color: '#ccc' }}>
              Nosotros
            </Link>
            <Link href="#contact" color="inherit" underline="hover" display="block" sx={{ color: '#ccc' }}>
              Contacto
            </Link>
          </Grid>

          {/* Columna 3: Información de Contacto */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contáctanos
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1, color: '#1976d2' }} />
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                El Tigre, Edo. Anzoátegui, Venezuela.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: '#1976d2' }} />
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                +58 424-8808637 / +58 414-8032019
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1, color: '#1976d2' }} />
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                info.servicios@kadmielsm.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Typography variant="body2" color="#888" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' Kadmiel Servicios y Mantenimiento. Todos los derechos reservados.'}
        </Typography>
      </Container>
    </Box>
  );
}