// src/theme.js
import { createTheme } from '@mui/material/styles';

// Colores extraídos de master.css
const colors = {
  azulPrimario: '#0f4c81',    // Tu "fondo-azul-primario"
  azulSecundario: '#1fb3e5',  // Tu "color-azul-secundario" y enlaces
  textoPrincipal: '#1d1d1f',  // Tu color de body
  fondoGris: '#f5f5f7',       // Tu background de body
  blanco: '#ffffff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.azulPrimario,
    },
    secondary: {
      main: colors.azulSecundario,
    },
    background: {
      default: colors.fondoGris,
      paper: colors.blanco,
    },
    text: {
      primary: colors.textoPrincipal,
    },
  },
  typography: {
    fontFamily: '"Cabin", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    // Personalizamos los botones para que tengan bordes redondeados modernos
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', // Evita que todo sea mayúsculas
          fontWeight: 600,
        },
      },
    },
    // Personalizamos las tarjetas para que tengan una sombra suave
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;