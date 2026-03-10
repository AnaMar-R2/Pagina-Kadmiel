// src/components/Contact.jsx
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Divider,
    Stack
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';

export default function Contact() {
    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#ffffff', // Fondo blanco puro
                color: '#0d1b2a',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Elementos decorativos de fondo */}
            <Box sx={{
                position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px',
                borderRadius: '50%', background: 'radial-gradient(circle, #1754af20 0%, transparent 70%)',
                filter: 'blur(50px)', zIndex: 0
            }} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>

                {/* ENCABEZADO DE SECCIÓN (Estilo similar a los anteriores pero adaptado) */}
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
                        ¿ESTÁS LISTO?
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
                        SOLICITA TU <Box component="span" sx={{ color: '#1754af' }}>ASESORÍA TÉCNICA</Box>
                    </Typography>
                    <Divider sx={{ width: '60px', height: '4px', bgcolor: '#1754af', mx: 'auto', mb: 4 }} />
                </Box>

                {/* CONTENEDOR DEL FORMULARIO (Estilo Referencia) */}
                <Box sx={{
                    maxWidth: '700px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>

                    {/* BARRA SUPERIOR INFORMATIVA (Estilo Bordered Box) */}
                    <Box sx={{
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: 2,
                        bgcolor: 'rgba(255,255,255,0.02)'
                    }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <CalendarMonthIcon sx={{ color: '#1754af', fontSize: '1.2rem' }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>Lunes a Viernes</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <AccessTimeIcon sx={{ color: '#1754af', fontSize: '1.2rem' }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>8:00 AM - 6:00 PM</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <LanguageIcon sx={{ color: '#1754af', fontSize: '1.2rem' }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>Cobertura Nacional</Typography>
                        </Stack>
                    </Box>

                    {/* TEXTO DE LLAMADO A LA ACCIÓN */}
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 800,
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            color: '#1754af'
                        }}
                    >
                        SOLICITA TU CONSULTORÍA TÉCNICA ESPECIALIZADA
                    </Typography>

                    {/* CAMPOS DEL FORMULARIO */}
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            placeholder="Nombre Completo"
                            variant="outlined"
                            sx={inputStyles}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="Email Corporativo"
                                    variant="outlined"
                                    sx={inputStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="WhatsApp / Teléfono"
                                    variant="outlined"
                                    sx={inputStyles}
                                />
                            </Grid>
                        </Grid>

                        {/* BOTÓN DE ACCIÓN (Prominente como en la foto) */}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                bgcolor: '#1754af',
                                color: '#fff',
                                py: 2,
                                fontWeight: 900,
                                fontSize: '1.1rem',
                                borderRadius: '8px',
                                '&:hover': {
                                    bgcolor: '#11428a',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s ease',
                                mt: 1
                            }}
                        >
                            QUIERO MI ASESORÍA AHORA
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

// Estilos personalizados para los inputs dark
const inputStyles = {
    '& .MuiOutlinedInput-root': {
        color: '#0d1b2a',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        '& fieldset': {
            borderColor: '#e0e0e0',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255,255,255,0.4)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1754af',
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: '16px',
        fontWeight: 500
    }
};
