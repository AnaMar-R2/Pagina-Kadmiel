// src/components/About.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Card, CardContent } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Enfoque al Cliente / Seguridad
import EngineeringIcon from '@mui/icons-material/Engineering'; // Liderazgo Tecnológico
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'; // Eficacia del Sistema
import GroupsIcon from '@mui/icons-material/Groups'; // Trabajo en Equipo
import SpaIcon from '@mui/icons-material/Spa'; // Calidad de Vida
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Competitividad

export default function About() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fff' }} id="about">
      <Container maxWidth="lg">
        {/* SECCIÓN INTRODUCTORIA */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="overline" 
              sx={{ color: '#1976d2', fontWeight: 'bold', letterSpacing: 2 }}
            >
              SOBRE NOSOTROS
            </Typography>
            
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ fontWeight: 800, mb: 3, color: '#0a1929' }}
            >
              Líderes en Soluciones Industriales
            </Typography>

            <Typography variant="body1" sx={{ color: '#555', mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              <strong>Kadmiel C.A.</strong> inicia sus operaciones en agosto de 2020, dedicada al servicio de asesoría técnica, instalación y mantenimiento de equipos para el levantamiento artificial de petróleo y Servicio de Instrumentación Industrial. 
              <br /><br />
              Nuestro mayor respaldo es contar con un personal calificado con más de 15 años de experiencia en la industria petrolera (nacional e internacional), garantizando resultados altamente confiables.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
                <Box 
                    component="img"
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                    alt="Ingeniero trabajando"
                    sx={{
                        width: '100%',
                        borderRadius: '20px',
                        boxShadow: '0px 20px 40px rgba(0,0,0,0.15)'
                    }}
                />
                <Paper 
                    elevation={4}
                    sx={{
                        position: 'absolute',
                        bottom: -30,
                        left: -30,
                        p: 3,
                        borderRadius: '15px',
                        borderLeft: '5px solid #1976d2',
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: '900' }}>
                        +15
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Años de <br/> Experiencia
                    </Typography>
                </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* MISIÓN Y VISIÓN */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
            <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 4, bgcolor: '#f5f9fc' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                            Misión
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                            Brindar a nuestros clientes una amplia diversidad de servicios especializados para las tecnologías de avanzada en sistemas de levantamiento artificial, completación, producción, automatización, optimización, instalación y mantenimiento de equipos de medición y control automático los cuales le permitan ser más eficientes; logrando el cumplimiento de sus expectativas y requerimientos, garantizando rentabilidad, crecimiento y ampliando oportunidades de desarrollo para nuestros empleados.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 4, bgcolor: '#f5f9fc' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                            Visión
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                            Ser líder en brindar servicios integrados en sistemas de Levantamiento Artificial, Completación, Producción, Automatización, Optimización e Instrumentación Industrial a nivel nacional, legítimamente reconocido por nuestros clientes, por la excelencia y calidad de nuestros servicios.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        {/* VALORES */}
        <Box>
            <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 6, color: '#0a1929' }}>
                Nuestros Valores
            </Typography>
            <Grid container spacing={4}>
                {[
                    { icon: <VerifiedUserIcon fontSize="large" />, title: "Enfoque al Cliente", desc: "Orientado hacia la satisfacción de los requerimientos del cliente." },
                    { icon: <EngineeringIcon fontSize="large" />, title: "Liderazgo Tecnológico", desc: "Alta capacidad en el manejo de la tecnología de punta." },
                    { icon: <SettingsSuggestIcon fontSize="large" />, title: "Eficacia del Sistema", desc: "Revisión sistemática del Sistema de Gestión de la Calidad, para el mejoramiento continuo." },
                    { icon: <GroupsIcon fontSize="large" />, title: "Trabajo en Equipo", desc: "Participación integrada del recurso humano en el desarrollo de los procesos." },
                    { icon: <SpaIcon fontSize="large" />, title: "Calidad de Vida", desc: "Ambiente favorecedor, estimulante y seguro hacia el cliente interno, externo y el entorno." },
                    { icon: <TrendingUpIcon fontSize="large" />, title: "Competitividad", desc: "Alta competencia como aspecto importante en la captación de clientes potenciales." }
                ].map((val, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <Box sx={{ color: '#1976d2', mb: 2, p: 2, borderRadius: '50%', bgcolor: '#e3f2fd' }}>
                                {val.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{val.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{val.desc}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

      </Container>
    </Box>
  );
}