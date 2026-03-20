import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildIcon from '@mui/icons-material/Build';

const bcpData = [
    { name: "ARTEMIS", value: 2, color: "#9e9e9e" },
    { name: "JINHECA", value: 82, color: "#1754af" },
    { name: "LIFTHING SOLUTIONS", value: 3, color: "#0c6a0b" },
    { name: "PCM", value: 224, color: "#0d1b2a" },
    { name: "HEBEY JERRY", value: 92, color: "#607d8b" }
];

const cabezalesData = [
    { name: "NOV", value: 20, color: "#c62828" },
    { name: "ALPRO", value: 3, color: "#2e7d32" },
    { name: "CORLAC", value: 3, color: "#d32f2f" },
    { name: "GRENCO", value: 12, color: "#1565c0" },
    { name: "HOUSING GRENCO", value: 1, color: "#455a64" },
    { name: "KUDU", value: 29, color: "#0288d1" },
    { name: "LIFTEQ", value: 9, color: "#00acc1" },
    { name: "NETZSCH", value: 6, color: "#7cb342" },
    { name: "R&M", value: 5, color: "#f9a825" },
    { name: "WFT", value: 22, color: "#ff1744" }
];

export default function Projects() {
    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 4, md: 6 },
                backgroundColor: '#f8fbfc',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: '#1754af', fontWeight: 900, letterSpacing: 4, display: 'block', mb: 1 }}
                    >
                        PORTAFOLIO DE ÉXITOS
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            mb: 2,
                            color: '#0d1b2a',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            textTransform: 'uppercase'
                        }}
                    >
                        HISTORIAL DE <Box component="span" sx={{ color: '#1754af' }}>SERVICIOS</Box>
                    </Typography>
                    <Box sx={{ width: '80px', height: '6px', bgcolor: '#1754af', mx: 'auto', borderRadius: '4px' }} />
                </Box>

                {/* KPI INDICATORS */}
                <Grid container spacing={3} sx={{ mb: 10 }} justifyContent="center">
                    <Grid item xs={12} sm={10} md={5}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                            <Paper sx={{
                                p: 4,
                                borderRadius: '24px',
                                bgcolor: '#1754af',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3,
                                boxShadow: '0 20px 40px rgba(23, 84, 175, 0.2)',
                                height: '100%'
                            }}>
                                <AssessmentIcon sx={{ fontSize: '4rem', opacity: 0.8 }} />
                                <Box>
                                    <Typography variant="h3" sx={{ fontWeight: 900, lineHeight: 1 }}>403</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600, opacity: 0.9, textTransform: 'uppercase', letterSpacing: 1 }}>Instalaciones BCP Realizadas</Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={5}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <Paper sx={{
                                p: 4,
                                borderRadius: '24px',
                                bgcolor: '#0d1b2a',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3,
                                boxShadow: '0 20px 40px rgba(13, 27, 42, 0.2)',
                                height: '100%'
                            }}>
                                <BuildIcon sx={{ fontSize: '4rem', opacity: 0.8 }} />
                                <Box>
                                    <Typography variant="h3" sx={{ fontWeight: 900, lineHeight: 1 }}>110</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600, opacity: 0.9, textTransform: 'uppercase', letterSpacing: 1 }}>Cabezales Reparados</Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* GRÁFICOS ESTADÍSTICOS */}
                <Grid container spacing={5} sx={{ mb: 8 }} justifyContent="center">
                    {/* Gráfico 1: Instalaciones BCP */}
                    <Grid item xs={12} sm={10} lg={5}>
                        <Paper sx={{ p: 4, borderRadius: '24px', height: '100%', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4, color: '#0d1b2a', textAlign: 'center' }}>
                                INSTALACIONES BCP - FABRICANTES
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {bcpData.map((item, idx) => (
                                    <Box key={idx}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: '#444' }}>{item.name}</Typography>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 900, color: item.color }}>{item.value}</Typography>
                                        </Box>
                                        <Box sx={{ width: '100%', bgcolor: '#eee', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.value / 250) * 100}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                                style={{ height: '100%', backgroundColor: item.color }}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Typography variant="caption" sx={{ fontWeight: 900, color: '#1754af', fontSize: '1.2rem' }}>TOTAL: 403</Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Gráfico 2: Cabezales Reparados */}
                    <Grid item xs={12} sm={10} lg={5}>
                        <Paper sx={{ p: 4, borderRadius: '24px', height: '100%', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4, color: '#0d1b2a', textAlign: 'center' }}>
                                CABEZALES REPARADOS - MARCAS
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {cabezalesData.map((item, idx) => (
                                    <Box key={idx}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: '#444' }}>{item.name}</Typography>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 900, color: item.color }}>{item.value}</Typography>
                                        </Box>
                                        <Box sx={{ width: '100%', bgcolor: '#eee', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.value / 35) * 100}%` }}
                                                transition={{ duration: 1, delay: idx * 0.05 }}
                                                style={{ height: '100%', backgroundColor: item.color }}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Typography variant="caption" sx={{ fontWeight: 900, color: '#0d1b2a', fontSize: '1.2rem' }}>TOTAL: 110</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}