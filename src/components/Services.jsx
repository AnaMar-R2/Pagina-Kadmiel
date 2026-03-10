// src/components/Services.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// Lista de servicios con áreas optimizadas para un balance perfecto
const servicesList = [
    {
        title: "INSTALACIÓN",
        image: "/instalacion.svg",
        description: "Sistemas de bombeo, sensores de fondo, cabezales de rotación y automatización industrial completa.",
        gridArea: { xs: 'span 1', md: '1 / 1 / 3 / 3' }, // Ocupa 2x2 arriba izquierda
        hoverColor: 'rgba(0, 32, 96, 0.85)' // #002060
    },
    {
        title: "MANTENIMIENTO",
        image: "/mantenimiento.svg",
        description: "Auditorías técnicas, mantenimiento preventivo de motores eléctricos y variadores de frecuencia.",
        gridArea: { xs: 'span 1', md: '1 / 3 / 2 / 5' }, // Ocupa 2 col, 1 row arriba derecha
        hoverColor: 'rgba(12, 106, 11, 0.85)'   // #0c6a0b 
    },
    {
        title: "REPARACIÓN",
        image: "/reparacion.svg",
        description: "Reparación especializada de equipos mecánicos e instrumentos de precisión.",
        gridArea: { xs: 'span 1', md: '2 / 3 / 3 / 4' }, // 1x1 medio centro-derecha
        hoverColor: 'rgba(234, 19, 15, 0.85) '  // #ea130f
    },
    {
        title: "SERVICIO EN LABORATORIO",
        image: "/laboratorio.svg",
        description: "Diagnóstico avanzado y pruebas de control en entornos controlados de laboratorio.",
        gridArea: { xs: 'span 1', md: '2 / 4 / 3 / 5' }, // 1x1 medio extremo derecha
        hoverColor: 'rgba(23, 84, 175, 0.85)'  // #1754af 
    },
    {
        title: "SERVICIO EN CAMPO",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        description: "Asistencia técnica inmediata en sitio, redes ethernet y sistemas de control en campo.",
        gridArea: { xs: 'span 1', md: '3 / 1 / 4 / 5' }, // Ocupa toda la fila inferior (4 columnas)
        hoverColor: 'rgba(23, 84, 175, 0.85)' // Repetimos #1754af para balance
    }
];

export default function Services() {
    return (
        <Box sx={{ py: 12, backgroundColor: '#f0f2f5', color: '#333' }} id="services">
            <Container maxWidth="lg">
                {/* Cabecera Rediseñada */}
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#1976d2',
                            fontWeight: 700,
                            letterSpacing: 4,
                            mb: 1,
                            display: 'block',
                            opacity: 0.8
                        }}
                    >
                        Nuestras Capacidades
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            color: '#0d1b2a',
                            lineHeight: 1.1,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 3,
                            position: 'relative',
                            display: 'inline-block'
                        }}
                    >
                        SERVICIOS <Box component="span" sx={{ color: '#1976d2' }}>INTEGRALES</Box>
                    </Typography>

                    <Box
                        sx={{
                            width: '80px',
                            height: '5px',
                            backgroundColor: '#1976d2',
                            mx: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3)'
                        }}
                    />
                </Box>

                {/* Bento Grid Simétrico */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                        gridTemplateRows: { xs: 'auto', md: 'repeat(3, 220px)' },
                        gap: 2,
                    }}
                >
                    {servicesList.map((service, index) => (
                        <Box
                            key={index}
                            sx={{
                                gridArea: { xs: 'auto', md: service.gridArea.md },
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                '&:hover': {
                                    zIndex: 10,
                                    transform: 'scale(1.01) translateY(-5px)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                    '& .bg-img': { transform: 'scale(1.1)' },
                                    '& .overlay': { background: service.hoverColor },
                                    '& .desc': { opacity: 1, transform: 'translateY(0)' }
                                }
                            }}
                        >
                            {/* Imagen de fondo con zoom fluido */}
                            <Box
                                className="bg-img"
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'transform 0.8s ease',
                                    zIndex: 0
                                }}
                            />

                            {/* Overlay sofisticado */}
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    p: 3,
                                    transition: 'all 0.4s ease',
                                    zIndex: 1
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                                        mb: 1,
                                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    {service.title}
                                </Typography>

                                <Typography
                                    className="desc"
                                    variant="body2"
                                    sx={{
                                        color: 'rgba(255,255,255,0.9)',
                                        fontSize: '0.85rem',
                                        lineHeight: 1.5,
                                        opacity: 0,
                                        transform: 'translateY(10px)',
                                        transition: 'all 0.3s ease 0.1s',
                                        display: { xs: 'none', sm: '-webkit-box' },
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {service.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}