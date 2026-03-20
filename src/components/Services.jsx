// src/components/Services.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Dialog, DialogTitle, DialogContent, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Lista de servicios con áreas optimizadas para un balance perfecto
const servicesList = [
    {
        title: "INSTALACIÓN",
        image: "/instalacion.svg",
        description: "Sistemas de bombeo, sensores de fondo y cabezales de rotación.",
        detailedDescription: "Nuestro servicio de instalación abarca la planificación meticulosa y ejecución técnica de sistemas de bombeo, sensores de fondo de pozo avanzados y sistemas rotativos. Aseguramos el cumplimiento de normativas industriales críticas para garantizar un despliegue seguro, eficiente y calibrado, mitigando el desgaste prematuro de tu maquinaria y multiplicando la rentabilidad operativa desde el día de la instalación.",
        modalImages: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80"
        ],
        gridArea: { xs: 'span 1', md: '1 / 1 / 3 / 3' }, // Ocupa 2x2 arriba izquierda
        hoverColor: 'rgba(0, 32, 96, 0.85)' // #002060
    },
    {
        title: "MANTENIMIENTO",
        image: "/mantenimiento.svg",
        description: "Auditorías técnicas, mantenimiento preventivo de motores eléctricos y variadores de frecuencia.",
        detailedDescription: "Realizamos un servicio intensivo de mantenimiento predictivo y preventivo, enfocado en motores eléctricos de alta tensión y sistemas de variación de frecuencia (VFD). Mediante auditorías técnicas y rutinas exhaustivas, identificamos anomalías antes de que se conviertan en fallas críticas, asegurando la continuidad de la producción ininterrumpida y prolongando la vida útil de sus activos estratégicos.",
        modalImages: [
            "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80"
        ],
        gridArea: { xs: 'span 1', md: '1 / 3 / 2 / 5' }, // Ocupa 2 col, 1 row arriba derecha
        hoverColor: 'rgba(12, 106, 11, 0.85)'   // #0c6a0b 
    },
    {
        title: "REPARACIÓN",
        image: "/reparacion.svg",
        description: "Reparación especializada de equipos y cabezales rotativos de pozos.",
        detailedDescription: "Contamos con un equipo altamente cualificado para la reparación profunda y restauración técnica de componentes vitales como cabezales rotativos de pozos petroleros y equipos mecánicos rotantes. Nuestro protocolo incluye pruebas hidrostáticas, reemplazo de rodamientos y calibraciones milimétricas con instrumentos de última generación para devolver el componente a sus condiciones mecánicas originales o superiores.",
        modalImages: [
            "https://images.unsplash.com/photo-1574689255018-b2a61af23ec0?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=600&q=80"
        ],
        gridArea: { xs: 'span 1', md: '2 / 3 / 3 / 4' }, // 1x1 medio centro-derecha
        hoverColor: 'rgba(234, 19, 15, 0.85) '  // #ea130f
    },
    {
        title: "SERVICIO EN LABORATORIO",
        image: "/laboratorio.svg",
        description: "Diagnóstico, servicio de electrónica y pruebas de variadores de frecuencia.",
        detailedDescription: "Nuestras instalaciones de laboratorio están equipadas para el análisis microscópico, termografía avanzada y testeo exhaustivo de tableros de control y placas electrónicas delicadas. Simulamos cargas eléctricas severas y exigencias mecánicas para probar los variadores de frecuencia al límite seguro de sus curvas de rendimiento, entregando un reporte diagnóstico digital preciso detallando la reparación efectuada.",
        modalImages: [
            "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581093588647-73d82343cb4b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80"
        ],
        gridArea: { xs: 'span 1', md: '2 / 4 / 3 / 5' }, // 1x1 medio extremo derecha
        hoverColor: 'rgba(23, 84, 175, 0.85)'  // #1754af 
    },
    {
        title: "PROYECTOS DE DESARROLLO",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        description: "Desarrollamos soluciones de ingeniería avanzada para la optimización de procesos, actualmente en fases de diseño, revisión y validación de prototipos industriales.",
        detailedDescription: "Conceptualizamos, modelamos y desplegamos soluciones tecnológicas llave en mano adaptadas rigurosamente a la medida de los desafíos de tu corporación. Ofrecemos diseños desde la automatización remota de procesos críticos, redes Ethernet industriales reforzadas I/O, hasta testeo funcional de prototipos a escala e integración nativa de software SCADA para que puedas tener comando táctico en tiempo real de tus pozos.",
        modalImages: [
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        gridArea: { xs: 'span 1', md: '3 / 1 / 4 / 5' }, // Ocupa toda la fila inferior (4 columnas)
        hoverColor: 'rgba(23, 84, 175, 0.85)' // Repetimos #1754af para balance
    }
];

export default function Services() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpen = (service) => {
        setSelectedService(service);
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        // Pequeño retardo para no limpiar los datos mientras la animación de cierre ocurre
        setTimeout(() => setSelectedService(null), 300);
    };

    return (
        <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: '#f0f2f5', color: '#333' }} id="services">
            <Container maxWidth="lg">
                {/* Cabecera Rediseñada */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                            onClick={() => handleOpen(service)}
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

            {/* Modal / Dialog de Detalles */}
            <Dialog
                open={openModal}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: '16px',
                        overflow: 'hidden'
                    }
                }}
            >
                {/* Cabecera del Modal */}
                <DialogTitle 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        pt: 3, 
                        px: { xs: 3, md: 5 }, 
                        backgroundColor: '#fff' 
                    }}
                >
                    <Typography 
                        variant="h4" 
                        component="h3" 
                        sx={{ 
                            fontWeight: 900, 
                            color: '#1976d2', 
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                    >
                        {selectedService?.title}
                    </Typography>
                    <IconButton 
                        onClick={handleClose} 
                        sx={{ 
                            color: '#0d1b2a', 
                            '&:hover': { color: '#e53935', transform: 'rotate(90deg)', transition: 'all 0.3s' } 
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                {/* Contenido del Modal */}
                <DialogContent sx={{ px: { xs: 3, md: 5 }, pb: 5 }}>
                    <Box 
                        sx={{ 
                            width: '60px', 
                            height: '4px', 
                            backgroundColor: '#1976d2', 
                            mb: 4, 
                            borderRadius: '2px' 
                        }} 
                    />

                    {/* Galería de 3 Fotos Centradas */}
                    <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                        {selectedService?.modalImages?.map((img, idx) => (
                            <Grid item xs={4} sm={4} md={4} key={idx}>
                                <Box 
                                    component="img"
                                    src={img}
                                    alt={`Detalle del servicio ${idx + 1}`}
                                    onError={(e) => { e.target.src = selectedService.image; }} // Usa imagen principal como fallback
                                    sx={{
                                        width: '100%',
                                        height: { xs: '70px', sm: '100px', md: '140px' }, 
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        display: 'block',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                        '&:hover': { 
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                                        }
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    
                    {/* Descripción Detallada */}
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#333', 
                            lineHeight: 1.8, 
                            fontSize: '1.1rem', 
                            textAlign: 'justify' 
                        }}
                    >
                        {selectedService?.detailedDescription}
                    </Typography>

                    {/* Botón de acción adicional (opcional dentro del modal) */}
                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic', mb: 2 }}>
                            ¿Tienes un proyecto en mente relacionado a este servicio?
                        </Typography>
                        <Typography 
                            component="a" 
                            href="#contact" 
                            onClick={handleClose}
                            sx={{ 
                                display: 'inline-block',
                                color: '#fff', 
                                backgroundColor: '#0c6a0b',
                                px: 4, 
                                py: 1.5,
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                transition: '0.3s',
                                '&:hover': { backgroundColor: '#095408', transform: 'translateY(-2px)', boxShadow: '0 5px 15px rgba(12,106,11,0.3)' }
                            }}
                        >
                            Contáctanos para una Asesoría
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}