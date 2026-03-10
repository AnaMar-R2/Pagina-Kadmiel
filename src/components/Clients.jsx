// src/components/Clients.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';

// Imágenes de assets para la composición derecha
import foto1 from '../assets/SistemaPCP_1.jpg';
import foto2 from '../assets/Mant_1.jpg';
import foto3 from '../assets/Servicios_2.jpg';
import foto4 from '../assets/Soporte.jpg';

// Importar Logos de Clientes
import logo1 from '../assets/Clients/1.png';
import logo2 from '../assets/Clients/2.png';
import logo3 from '../assets/Clients/3.png';
import logo4 from '../assets/Clients/4.png';
import logo5 from '../assets/Clients/5.png';
import logo6 from '../assets/Clients/6.png';
import logo7 from '../assets/Clients/7.png';
import logo8 from '../assets/Clients/8.png';
import logo9 from '../assets/Clients/9.png';
import logo10 from '../assets/Clients/10.png';
import logo11 from '../assets/Clients/11.png';

export default function Clients() {
    // Array de logos reales
    const clientLogos = [
        { img: logo1 }, { img: logo2 }, { img: logo3 },
        { img: logo4 }, { img: logo5 }, { img: logo6 },
        { img: logo7 }, { img: logo8 }, { img: logo9 },
        { img: logo10 }, { img: logo11 }
    ];

    return (
        <Box
            id="clients"
            sx={{
                pt: { xs: 5, md: 8 },
                pb: { xs: 4, md: 6 },
                background: 'linear-gradient(to bottom, #f0f7ff 0%, #ffffff 250px, #ffffff 100%)', // Fusión perfecta
                color: '#0d1b2a',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Fondo decorativo sutil con gradiente suave descentrado */}
            <Box sx={{
                position: 'absolute', top: '200px', left: 0, width: '100%', height: '100%',
                opacity: 0.05, pointerEvents: 'none',
                background: 'radial-gradient(circle at 20% 50%, #1754af 0%, transparent 70%)'
            }} />

            <Container maxWidth="xl">
                <Grid container spacing={6} alignItems="flex-start">

                    {/* PARTE IZQUIERDA: TÍTULO Y LOGOS */}
                    <Grid item xs={12} md={12} sx={{ position: 'relative', zIndex: 1 }}>
                        <Box sx={{ mb: 4, textAlign: 'center' }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#0c6a0b',
                                    fontWeight: 800,
                                    letterSpacing: 4,
                                    mb: 1,
                                    display: 'block'
                                }}
                            >
                                ALIANZAS ESTRATÉGICAS
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 900,
                                    color: '#0d1b2a',
                                    fontSize: { xs: '2.5rem', md: '4rem' },
                                    mb: 2,
                                    letterSpacing: -1,
                                    textTransform: 'uppercase'
                                }}
                            >
                                NUESTROS <Box component="span" sx={{ color: '#0c6a0b' }}>CLIENTES</Box>
                            </Typography>
                            <Divider sx={{ width: '80px', height: '6px', bgcolor: '#0c6a0b', mx: 'auto', borderRadius: '0' }} />
                        </Box>

                        <Box sx={{ px: { md: 4 } }}>
                            <Grid container spacing={4} justifyContent="center" alignItems="center">
                                {clientLogos.map((logo, index) => (
                                    <Grid item xs={6} sm={4} md={3} key={index}>
                                        <Box sx={{
                                            height: '110px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: 1,
                                            transition: 'all 0.4s ease',
                                            '&:hover': {
                                                transform: 'scale(1.08)',
                                                '& img': {
                                                    filter: 'grayscale(0%)',
                                                    opacity: 1
                                                }
                                            }
                                        }}>
                                            <Box
                                                component="img"
                                                src={logo.img}
                                                alt={`Client logo ${index + 1}`}
                                                sx={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'contain',
                                                    filter: 'grayscale(100%)', // Volviendo a escala de grises sobre fondo claro
                                                    opacity: 0.8,
                                                    transition: 'all 0.4s ease'
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    {/* PARTE DERECHA: oculta para evitar espacio vacío */}
                    <Grid item xs={12} md={5} sx={{ display: 'none', position: 'relative' }}>
                        <Box sx={{
                            position: 'relative',
                            height: '280px',
                            width: '110%',
                            ml: -5
                        }}>
                            {/* Línea azul diagonal de fondo */}
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '200%',
                                height: '20px',
                                background: '#1754af',
                                transform: 'translate(-50%, -50%) rotate(-45deg)',
                                zIndex: 0,
                                opacity: 0.8
                            }} />

                            {/* Foto Superior */}
                            <Box sx={{
                                position: 'absolute', top: '2%', right: '5%', width: '60%', height: '35%',
                                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                backgroundImage: `url(${foto1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '4px solid #fff',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                zIndex: 3
                            }} />

                            {/* Foto Central (Grande) */}
                            <Box sx={{
                                position: 'absolute', top: '35%', left: '5%', width: '85%', height: '40%',
                                clipPath: 'polygon(0% 15%, 100% 0%, 90% 100%, 0% 85%)',
                                backgroundImage: `url(${foto3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '6px solid #fff',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                                zIndex: 4
                            }} />

                            {/* Foto Lateral Derecha */}
                            <Box sx={{
                                position: 'absolute', top: '65%', right: '0%', width: '50%', height: '30%',
                                clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
                                backgroundImage: `url(${foto2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '4px solid #fff',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                zIndex: 2
                            }} />

                            {/* Foto Pequeña Inferior */}
                            <Box sx={{
                                position: 'absolute', bottom: '2%', left: '15%', width: '40%', height: '25%',
                                clipPath: 'polygon(0% 0%, 85% 15%, 100% 100%, 15% 85%)',
                                backgroundImage: `url(${foto4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '4px solid #fff',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                zIndex: 5
                            }} />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
