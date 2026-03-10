// src/components/About.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Stack, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupsIcon from '@mui/icons-material/Groups';
import SpaIcon from '@mui/icons-material/Spa';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EquipoImg from '../assets/Equipo.svg';

export default function About() {
    return (
        <Box sx={{
            py: { xs: 10, md: 15 },
            backgroundColor: '#f0f7ff',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #f0f2f5 0%, #f0f7ff 300px, #f0f7ff 100%)'
        }} id="about">
            <Container maxWidth="lg">

                {/* BLOQUE 1: TÍTULO CENTRADO ARRIBA */}
                <Box sx={{ textAlign: 'center', mb: 12 }}>
                    <Typography variant="overline" sx={{ color: '#1754af', fontWeight: 900, letterSpacing: 4, display: 'block', mb: 1 }}>
                        KADMIEL SOLUTIONS
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, color: '#0d1b2a', fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1, letterSpacing: -1 }}>
                        INGENIERÍA QUE <Box component="span" sx={{ color: '#1754af' }}>TRANSFORMA</Box>
                    </Typography>
                    <Box sx={{ width: '120px', height: '8px', bgcolor: '#1754af', mx: 'auto', borderRadius: '10px' }} />
                </Box>

                {/* COMPOSICIÓN FORZADA SIDE-BY-SIDE (FLEX) */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Vertical en móvil, Horizontal en desktop
                    alignItems: 'center',
                    gap: { xs: 8, md: 10 },
                    mb: 18
                }}>

                    {/* COLUMNA IZQUIERDA: IMÁGENES */}
                    <Box className='imagenes_about' sx={{ flex: 1, width: '100%', position: 'relative' }}>
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                component="img"
                                src={EquipoImg}
                                alt="Ingeniería Kadmiel"
                                sx={{
                                    width: '100%',
                                    borderRadius: '0',
                                    boxShadow: '20px 20px 0px rgba(23, 84, 175, 0.1)',
                                    zIndex: 1,
                                    position: 'relative'
                                }}
                            />
                            {/* Caja de Experiencia Flotante (3D) */}
                            <Paper
                                elevation={10}
                                sx={{
                                    position: 'absolute',
                                    bottom: -25,
                                    left: { xs: 5, md: -25 },
                                    p: 1.8,
                                    borderRadius: '0',
                                    borderLeft: '5px solid #1754af',
                                    bgcolor: '#fff',
                                    zIndex: 10,
                                    minWidth: '140px'
                                }}
                            >
                                <Typography variant="h2" sx={{ color: '#1754af', fontWeight: 900, lineHeight: 1, fontSize: '2.2rem' }}>+15</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0d1b2a', fontSize: '0.75rem', mt: 0.5, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    Años de <br /> Liderazgo
                                </Typography>
                            </Paper>
                            <Box sx={{
                                position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px',
                                borderRight: '12px solid rgba(23, 84, 175, 0.05)', borderTop: '12px solid rgba(23, 84, 175, 0.05)', zIndex: 0
                            }} />
                        </Box>
                    </Box>

                    {/* COLUMNA DERECHA: TEXTO */}
                    <Box className='texto_about' sx={{ flex: 1, width: '100%' }}>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 2.2, fontSize: '1.3rem', fontWeight: 400, borderLeft: '8px solid #1754af', pl: 4 }}>
                            Desde agosto de 2020, <strong>Kadmiel C.A.</strong> redefine la eficiencia en la industria a través de la excelencia en asesoría técnica estratégica e instrumentación avanzada.
                            <br /><br />
                            Nuestra trayectoria de 15 años garantiza resultados altamente confiables, optimizando sistemas de producción y procesos industriales críticos bajo estándares internacionales.
                        </Typography>
                    </Box>
                </Box>

                {/* BLOQUE 2: MISIÓN Y VISIÓN (PILLS 3D PREMIUM) */}
                <Box sx={{ mb: 18 }}>
                    <Stack spacing={8}>
                        {/* MISIÓN */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 0 }}>
                            <Box sx={{
                                flex: 1, bgcolor: '#fff', p: { xs: 5, md: 6 },
                                borderRadius: { xs: '40px 40px 0 0', md: '100px 0 0 100px' },
                                boxShadow: '30px 30px 80px rgba(0,0,0,0.1), -10px -10px 40px rgba(255,255,255,1)',
                                display: 'flex', alignItems: 'center', gap: 5, zIndex: 1, width: '100%'
                            }}>
                                <RocketLaunchIcon sx={{ fontSize: '4.5rem', color: '#0c6a0b', opacity: 1 }} />
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: '#0c6a0b', letterSpacing: 2 }}>MISIÓN</Typography>
                                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, fontSize: '1.2rem', fontWeight: 500 }}>
                                        Brindar servicios especializados de vanguardia en Sistemas de Producción, Automatización y Optimización, garantizando eficiencia absoluta y crecimiento sostenible.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: { xs: '100%', md: '220px' }, bgcolor: '#0c6a0b',
                                borderRadius: { xs: '0 0 40px 40px', md: '0 100px 100px 0' },
                                display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: '100px', md: '220px' },
                                boxShadow: 'inset -8px -8px 20px rgba(0,0,0,0.3), 20px 20px 40px rgba(12, 106, 11, 0.4)', zIndex: 2
                            }}>
                                <Typography variant="h1" sx={{ fontWeight: 900, color: '#fff', fontSize: '6rem', opacity: 0.9 }}>01</Typography>
                            </Box>
                        </Box>

                        {/* VISIÓN */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 0 }}>
                            <Box sx={{
                                width: { xs: '100%', md: '220px' }, bgcolor: '#002060',
                                borderRadius: { xs: '40px 40px 0 0', md: '100px 0 0 100px' },
                                display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: '100px', md: '220px' },
                                boxShadow: 'inset 8px 8px 20px rgba(255,255,255,0.1), -20px 20px 40px rgba(0, 32, 96, 0.4)', zIndex: 2
                            }}>
                                <Typography variant="h1" sx={{ fontWeight: 900, color: '#fff', fontSize: '6rem', opacity: 0.9 }}>02</Typography>
                            </Box>
                            <Box sx={{
                                flex: 1, bgcolor: '#fff', p: { xs: 5, md: 6 },
                                borderRadius: { xs: '0 0 40px 40px', md: '0 100px 100px 0' },
                                boxShadow: '30px 30px 80px rgba(0,0,0,0.1)',
                                display: 'flex', alignItems: 'center', gap: 5, zIndex: 1, width: '100%'
                            }}>
                                <Box sx={{ flex: 1, textAlign: { md: 'right' } }}>
                                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: '#002060', letterSpacing: 2 }}>VISIÓN</Typography>
                                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, fontSize: '1.2rem', fontWeight: 500 }}>
                                        Liderar la transformación energética nacional mediante servicios integrados de instrumentación industrial, reconocidos por nuestra integridad, innovación y calidad suprema.
                                    </Typography>
                                </Box>
                                <VisibilityIcon sx={{ fontSize: '4.5rem', color: '#002060', opacity: 1 }} />
                            </Box>
                        </Box>
                    </Stack>
                </Box>

                {/* BLOQUE 3: ROADMAP DE VALORES (SISTEMA TÉCNICO PRO) - Nuevo diseño zigzag */}
                <Box>
                    <Box sx={{ textAlign: 'center', mb: 12 }}>
                        <Typography variant="overline" sx={{ color: '#1754af', fontWeight: 900, letterSpacing: 6, display: 'block', mb: 1 }}>FILOSOFÍA TÉCNICA</Typography>
                        <Typography variant="h2" sx={{ fontWeight: 900, color: '#0d1b2a', fontSize: { xs: '2.3rem', md: '4rem' }, letterSpacing: -1 }}>
                            NUESTROS <Box component="span" sx={{ color: '#1754af' }}>VALORES</Box>
                        </Typography>
                        <Box sx={{ width: '150px', height: '8px', bgcolor: 'rgba(23, 84, 175, 0.1)', mx: 'auto', mt: 2, position: 'relative', overflow: 'hidden' }}>
                            <Box sx={{ width: '40px', height: '100%', bgcolor: '#1754af', position: 'absolute', left: 0 }} />
                        </Box>
                    </Box>

                    <Stack spacing={4} sx={{ maxWidth: '1150px', mx: 'auto', position: 'relative' }}>
                        {[
                            { title: "ENFOQUE AL CLIENTE", desc: "Toda la organización está orientada al logro de la satisfacción de nuestros clientes.", icon: <VerifiedUserIcon sx={{ fontSize: '3rem' }} />, pos: 'left', code: 'VAL-01', color: '#ea130f' },
                            { title: "LIDERAZGO TECNOLÓGICO", desc: "Alta capacidad técnica de nuestros colaboradores en el manejo de la tecnología de punta.", icon: <EngineeringIcon sx={{ fontSize: '3rem' }} />, pos: 'right', code: 'VAL-02', color: '#1754af' },
                            { title: "TRABAJO EN EQUIPO", desc: "Participación integrada del recurso humano en el desarrollo de los procesos. Para el logro de los objetivos en común.", icon: <GroupsIcon sx={{ fontSize: '3rem' }} />, pos: 'left', code: 'VAL-03', color: '#0c6a0b' },
                            { title: "CALIDAD DE VIDA", desc: "Se propicia un ambiente favorecedor, estimulante y seguro hacia el cliente interno, cliente externo y el entorno.", icon: <SpaIcon sx={{ fontSize: '3rem' }} />, pos: 'right', code: 'VAL-04', color: '#002060' }
                        ].map((val, idx) => (
                            <Box key={idx} sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: val.pos === 'left' ? 'row' : 'row-reverse' },
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                position: 'relative',
                                width: '100%',
                                '&:not(:last-child)': {
                                    pb: { xs: 0, md: 0 } // Adjust spacing between items
                                }
                            }}>
                                {/* Conector en L (Desktop) */}
                                {idx < 3 && ( // Only render connector for items that are not the last one
                                    <Box sx={{
                                        display: { xs: 'none', md: 'block' },
                                        position: 'absolute',
                                        top: '50%',
                                        [val.pos === 'left' ? 'right' : 'left']: 'calc(50% - 10px)', // Position relative to center
                                        width: '50%',
                                        height: 'calc(100% + 10px)', // Height to connect to next item
                                        zIndex: 0,
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            [val.pos === 'left' ? 'right' : 'left']: 0,
                                            top: 0,
                                            width: 'calc(50% + 10px)', // Horizontal part
                                            height: '2px',
                                            borderBottom: '2px dashed rgba(23, 84, 175, 0.3)',
                                            transform: 'translateY(-50%)',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            [val.pos === 'left' ? 'right' : 'left']: 'calc(50% + 10px)',
                                            top: '50%',
                                            width: '2px',
                                            height: 'calc(50% + 50px)', // Vertical part
                                            borderLeft: '2px dashed rgba(23, 84, 175, 0.3)',
                                        }
                                    }} />
                                )}

                                {/* Conector vertical para móvil */}
                                {idx < 3 && (
                                    <Box sx={{
                                        display: { xs: 'block', md: 'none' },
                                        position: 'absolute',
                                        left: '35px',
                                        top: '50%',
                                        width: '2px',
                                        height: 'calc(100% + 40px)', // Connects to the next item
                                        borderLeft: '2px dashed rgba(23, 84, 175, 0.3)',
                                        zIndex: 0,
                                        transform: 'translateY(-50%)'
                                    }} />
                                )}



                                {/* Tarjeta de Valor */}
                                <Box sx={{
                                    width: { xs: 'calc(100% - 90px)', md: '58%' },
                                    ml: { xs: '90px', md: val.pos === 'left' ? 0 : 'auto' },
                                    mr: { xs: 0, md: val.pos === 'right' ? 0 : 'auto' },
                                    bgcolor: '#fff', p: { xs: 3, md: 4 }, borderRadius: '0',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                                    border: `1px solid ${val.color}22`,
                                    borderLeft: { xs: `10px solid ${val.color}`, md: val.pos === 'left' ? `10px solid ${val.color}` : 'none' },
                                    borderRight: { xs: 'none', md: val.pos === 'right' ? `10px solid ${val.color}` : 'none' },
                                    position: 'relative'
                                }}>



                                    <Box sx={{ color: val.color, mb: 3 }}>{val.icon}</Box>
                                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: '#0d1b2a', fontSize: '1.6rem', letterSpacing: 1 }}>{val.title}</Typography>
                                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, fontWeight: 500, fontSize: '1.15rem' }}>{val.desc}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}