'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto, Playfair_Display } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0f0f18', // Professional Gold
    },
    background: {
      default: '#121212', // Deep Charcoal
      paper: '#1E1E1E',   // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily, // Serif for headings (Elegant)
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners feel more "architectural/modern"
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;