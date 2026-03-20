// src/components/Contact.jsx
import React, { useState } from 'react';
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
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// CONFIGURACIÓN DE ENVÍO (Web3Forms)
// 1. Regístrate en https://web3forms.com/
// 2. Obtén tu "Access Key"
const WEB3_ACCESS_KEY = '1dfd7158-6ee6-49f9-9ad9-4bdf08f8205c';

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitResult(null);

        const payload = {
            ...formData,
            access_key: WEB3_ACCESS_KEY,
            from_name: 'Kadmiel Landing Page',
            subject: `Nueva solicitud de asesoría de ${formData.nombre}`
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitResult('success');
                setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
            } else {
                console.error('Error de Web3Forms:', data);
                setSubmitResult('error');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitResult('error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box
            id="contact"
            component="form"
            onSubmit={handleSubmit}
            sx={{
                py: { xs: 4, md: 6 },
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
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>8:00 AM - 5:00 PM</Typography>
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
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Nombre Completo"
                            variant="outlined"
                            sx={inputStyles}
                            required
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Corporativo"
                                    variant="outlined"
                                    sx={inputStyles}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder="WhatsApp / Teléfono"
                                    variant="outlined"
                                    sx={inputStyles}
                                    required
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            fullWidth
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Tu Mensaje"
                            variant="outlined"
                            multiline
                            rows={4}
                            sx={inputStyles}
                            required
                        />

                        {/* Mensajes de Estado */}
                        {submitResult === 'success' && (
                            <Typography sx={{ color: '#2e7d32', fontWeight: 600, textAlign: 'center', fontSize: '0.9rem' }}>
                                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                            </Typography>
                        )}
                        {submitResult === 'error' && (
                            <Typography sx={{ color: '#d32f2f', fontWeight: 600, textAlign: 'center', fontSize: '0.9rem' }}>
                                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                            </Typography>
                        )}

                        {/* BOTÓN DE ACCIÓN (Prominente como en la foto) */}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={submitting}
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
                                '&:disabled': {
                                    bgcolor: '#ccc'
                                },
                                transition: 'all 0.3s ease',
                                mt: 1
                            }}
                        >
                            {submitting ? 'ENVIANDO...' : 'QUIERO MI ASESORÍA AHORA'}
                        </Button>

                        <Divider sx={{ my: 1, opacity: 0.5 }}>
                            <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>O TAMBIÉN PUEDES</Typography>
                        </Divider>

                        <Button
                            fullWidth
                            component="a"
                            href="/brochure-kadmiel.pdf"
                            download="brochure-kadmiel.pdf"
                            variant="outlined"
                            startIcon={<CloudDownloadIcon />}
                            sx={{
                                color: '#c7f2c5ff',
                                bgcolor: '#1e8b1cff',
                                py: 1.5,
                                fontWeight: 800,
                                fontSize: '1rem',
                                borderRadius: '8px',
                                '&:hover': {
                                    bgcolor: '#117b0fff',
                                    color: '#ddf5dcff',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Descargar Brochure
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
