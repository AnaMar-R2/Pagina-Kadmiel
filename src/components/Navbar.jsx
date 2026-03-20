// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import logotipo from '../assets/Logotipo.svg';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

/**
 * Componente Navbar rediseñado con efecto de scroll dinámico.
 * Aparece transparente al inicio y cambia a azul sólido al bajar.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detector de scroll para cambiar el fondo del Navbar e Intersection Observer para secciones
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Configuración del Intersection Observer para detectar la sección activa
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detectar cuando la sección está en el centro
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id], footer[id], div[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Función para realizar un scroll suave con compensación de altura del Navbar.
   */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 64;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
    if (mobileOpen) setMobileOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Inicio', href: '#home', color: 'linear-gradient(to bottom, #4a90e2, #357abd)', textColor: '#ffffff' },
    { id: 'about', label: 'Nosotros', href: '#about', color: 'linear-gradient(to bottom, #5c6bc0, #3f51b5)', textColor: '#ffffff' },
    { id: 'services', label: 'Servicios', href: '#services', color: 'linear-gradient(to bottom, #66bb6a, #43a047)', textColor: '#ffffff' },
    { id: 'clients', label: 'Clientes', href: '#clients', color: 'linear-gradient(to bottom, #546e7a, #37474f)', textColor: '#ffffff' },
    { id: 'projects', label: 'Portafolio', href: '#projects', color: 'linear-gradient(to bottom, #2c3e50, #1a252f)', textColor: '#ffffff' },
    { id: 'contact', label: 'Contacto', href: '#contact', color: 'linear-gradient(to bottom, #e53935, #c62828)', textColor: '#ffffff' },
  ];

  // Contenido del menú lateral para móviles
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <img
          src={logotipo}
          alt="Kadmiel Logo"
          style={{
            height: '50px',
            filter: 'drop-shadow(0px 0px 5px rgba(0,0,0,0.2))'
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              sx={{
                textAlign: 'center',
                background: activeSection === item.id ? item.color : 'transparent',
                '& .MuiTypography-root': {
                  color: activeSection === item.id ? item.textColor : '#1754af',
                  fontWeight: activeSection === item.id ? 700 : 400,
                }
              }}
            >
              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? '#696969a0' : 'rgba(105, 105, 105, 0.42)',
          boxShadow: isScrolled ? 4 : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(10px)',
          backgroundImage: 'none',
          height: '64px',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'visible'
        }}
      >
        <Toolbar sx={{ minHeight: '64px', p: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100%' }}>
          {/* Logo y Botón móvil */}
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, mb: 1, zIndex: 10 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: '#1754af' }}
            >
              <MenuIcon />
            </IconButton>

            <img
              src={logotipo}
              alt="Kadmiel Logo"
              style={{
                height: '42px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => window.location.href = '#home'}
            />
          </Box>

          {/* Menú de pestañas modernas redondeadas (Escritorio) */}
          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            height: '100%',
            alignItems: 'flex-end',
            pr: 2
          }}>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: { sm: '100px', md: '130px' },
                    height: '100%',
                    textDecoration: 'none',
                    background: item.color,
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    transform: 'skewX(-30deg)',
                    marginLeft: index === 0 ? '0' : '-18px',
                    zIndex: index + 1, // Capas estáticas según el orden natural
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '-4px 0 10px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderBottom: 'none',
                    '&:hover': {
                      filter: 'brightness(0.9)', // Oscurecer ligeramente
                      boxShadow: '-4px 0 15px rgba(0,0,0,0.2)',
                      '& .tab-text': {
                        transform: 'skewX(30deg) scale(1.1)', // Crecer texto
                        fontWeight: 900
                      }
                    }
                  }}
                >
                  <Typography
                    className="tab-text"
                    sx={{
                      transform: 'skewX(30deg)',
                      color: item.textColor,
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 800 : 700,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      px: 1,
                      textShadow: isActive ? '0 0 1px rgba(255,255,255,0.5)' : 'none'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navegación para dispositivos móviles */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
