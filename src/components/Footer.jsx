// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Typography, Link, IconButton, Divider, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Contacto', href: '#contact' },
];

const linkSx = {
  color: '#8a99aa',
  fontSize: '0.82rem',
  fontWeight: 500,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  transition: 'color 0.2s',
  '&:hover': { color: '#fff' },
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#080f1a', color: 'white' }}>

      {/* FRANJA PRINCIPAL */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 5, md: 0 }
        }}>

          {/* MARCA */}
          <Box sx={{ minWidth: '180px' }}>
            <Typography sx={{ fontWeight: 900, fontSize: '1.3rem', letterSpacing: 3, color: '#fff', lineHeight: 1 }}>
              KADMIEL
              <Box component="span" sx={{ color: '#1754af' }}> C.A.</Box>
            </Typography>
            <Typography sx={{ color: '#4a5a6a', fontSize: '0.72rem', letterSpacing: 2, mt: 0.5, textTransform: 'uppercase' }}>
              Ingeniería & Automatización
            </Typography>
          </Box>

          {/* NAVEGACIÓN — centro */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 3 }}
            sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}
          >
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} underline="none" sx={linkSx}>
                {l.label}
              </Link>
            ))}
          </Stack>

          {/* CONTACTO COMPACTO — derecha */}
          <Stack spacing={1} sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ fontSize: '0.85rem', color: '#1754af' }} />
              <Typography sx={{ color: '#8a99aa', fontSize: '0.8rem' }}>
                +58 424-8808637
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ fontSize: '0.85rem', color: '#1754af' }} />
              <Typography sx={{ color: '#8a99aa', fontSize: '0.8rem' }}>
                info.servicios@kadmielsm.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon sx={{ fontSize: '0.85rem', color: '#1754af' }} />
              <Typography sx={{ color: '#8a99aa', fontSize: '0.8rem' }}>
                El Tigre, Anzoátegui, Venezuela
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />

      {/* BARRA INFERIOR */}
      <Container maxWidth="lg">
        <Box sx={{
          py: 2,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1
        }}>
          <Typography sx={{ color: '#2e3d4d', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Kadmiel C.A. — Todos los derechos reservados.
          </Typography>

          {/* Íconos sociales */}
          <Stack direction="row" spacing={0.5}>
            {[
              { icon: <FacebookIcon sx={{ fontSize: '1rem' }} />, label: 'Facebook' },
              { icon: <InstagramIcon sx={{ fontSize: '1rem' }} />, label: 'Instagram' },
              { icon: <WhatsAppIcon sx={{ fontSize: '1rem' }} />, label: 'WhatsApp' },
            ].map(({ icon, label }) => (
              <IconButton
                key={label}
                aria-label={label}
                size="small"
                sx={{
                  color: '#2e3d4d',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#1754af', bgcolor: 'transparent' }
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>

    </Box>
  );
}