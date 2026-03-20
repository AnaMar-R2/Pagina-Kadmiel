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
import logo12 from '../assets/Clients/12.png';

export default function Clients() {
    // Array de logos reales
    const clientLogos = [
        { img: logo1 }, { img: logo2 }, { img: logo3 },
        { img: logo4 }, { img: logo5 }, { img: logo6 },
        { img: logo7 }, { img: logo8 }, { img: logo9 },
        { img: logo10 }, { img: logo11 }, { img: logo12 }
    ];

    return (
        <Box
            id="clients"
            sx={{
                pt: { xs: 4, md: 6 },
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

            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#1754af',
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
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            letterSpacing: -1,
                            textTransform: 'uppercase'
                        }}
                    >
                        NUESTROS <Box component="span" sx={{ color: '#1754af' }}>CLIENTES</Box>
                    </Typography>
                    <Box sx={{ width: '80px', height: '6px', bgcolor: '#1754af', mx: 'auto', borderRadius: '4px' }} />
                </Box>

                <Box sx={{ 
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(3, 1fr)',
                        md: 'repeat(6, 1fr)'
                    },
                    width: '100%',
                    mx: 'auto'
                }}>
                    {clientLogos.map((logo, index) => (
                        <Box 
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: { xs: 2, md: 3 }
                            }}
                        >
                            <Box sx={{
                                width: '100%',
                                height: '110px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.1)',
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
                                        maxWidth: '85%',
                                        maxHeight: '85%',
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%)',
                                        opacity: 0.6,
                                        transition: 'all 0.4s ease'
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
