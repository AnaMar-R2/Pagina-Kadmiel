// src/components/Services.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const servicesList = [
    {
        title: "INSTALACIÓN",
        image: "/instalacion.png",
        description: "Equipos de Bombas de Cavidad Progresivas, Tubular e Insertable, Separador de Gas, Sistemas de Sensores de Fondo, Cabezales de Rotación, Variadores de Frecuencia, Motores Eléctricos, Instrumentos de Temperatura, Flujo, Nivel, Presión, Aire comprimido, Medición eléctrica, Vapor, Gas, Combustión, Sensores, Juntas rotativas, Automatización, Seguridad industrial y Válvulas."
    },
    {
        title: "MANTENIMIENTO",
        image: "/mantenimiento.png",
        description: "Anclas de Torque, Cabezales de Rotación, Sistema de Freno, Variadores de Frecuencia, Motores Eléctricos, Data loggers, Inspecciones visuales con equipos Boroscope en Bombas de Cavidad Progresivas, Instrumentos de Temperatura, Flujo, Nivel, Presión, Aire comprimido, Medición eléctrica, Vapor, Gas, Combustión, Sensores, Juntas Rotativas, Automatización, Seguridad Industrial y Válvulas."
    },
    {
        title: "REPARACIÓN",
        image: "/reparacion.png",
        description: "Cabezales de Rotación, Variadores de Frecuencias, Reparaciones Mecanicas en Motores Electricos, Data loggers, Instrumentos de Temperatura, Flujo, Nivel, Presión, Aire comprimido, Medición eléctrica, Vapor, Gas, Combustión, Sensores, Juntas rotativas, Automatización, Seguridad industrial y Válvulas."
    },
    {
        title: "SERVICIO EN LABORATORIO",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f138?auto=format&fit=crop&w=800&q=80", // Placeholder image
        description: "Pruebas, Diagnóstico y/o Reparaciones de Variadores de Frecuencias, de Data Logger, de Sistemas de Control, Pruebas de Comunicaciones Ethernet y Modbus."
    },
    {
        title: "SERVICIO EN CAMPO",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80", // Placeholder image
        description: "Pruebas, Diagnóstico y Reparaciones de Variadores de Frecuencias, de Data Logger, Lazo de Comunicaciones Ethernet y Modbus, Lazos y Sistemas de Control, Equipos y Lazos de Instrumentación entre otro."
    }
];

export default function Services() {
    return (
        <Box sx={{ py: 10, backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'center' }} id="services">
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        mb: 6,
                        color: '#1976d2',
                        textTransform: 'uppercase',
                        letterSpacing: 3
                    }}
                >
                    Nuestros Servicios
                </Typography>

                {/* Grid Container centrado */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    {servicesList.map((item, index) => (
                        <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper
                                elevation={8}
                                sx={{
                                    position: 'relative',
                                    height: '500px', // Altura ajustada
                                    width: '100%',   // Ancho total de la columna
                                    borderRadius: '8px',
                                    overflow: 'hidden',

                                    // Esto recorta la imagen automáticamente para llenar el cuadro
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: 24
                                    },
                                    '&:hover .overlay': {
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    },
                                    '&:hover .main-title': {
                                        opacity: 0,
                                        transform: 'scale(0.8)',
                                    }
                                }}
                            >
                                {/* Título por defecto */}
                                <Typography
                                    variant="h4" // Un poco más pequeño para que quepan títulos largos
                                    className="main-title"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        textShadow: '2px 2px 10px rgba(0,0,0,0.9)',
                                        transition: 'all 0.4s ease',
                                        zIndex: 1,
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                        padding: '15px 0'
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* Capa Oscura (Hover) */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(12, 28, 48, 0.96)',
                                        color: 'white',
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        opacity: 0,
                                        transform: 'translateY(20px)',
                                        transition: 'all 0.4s ease-in-out',
                                        zIndex: 2,
                                        textAlign: 'justify'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: '#64b5f6',
                                            mb: 2,
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: '0.85rem',
                                            lineHeight: 1.5,
                                            fontWeight: 300,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}