import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// 1. IMPORT THE PROJECT COMPONENT HERE
import Projects from '@/components/sections/Projects'; 
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    // 2. WRAP EVERYTHING IN A FRAGMENT (<> ... </>)
    <>
      {/* HERO SECTION START */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          // Added a subtle attachment fix for the background to look professional on scroll
          background: 'linear-gradient(45deg, #121212 30%, #1E1E1E 90%)', 
          backgroundAttachment: 'fixed' 
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 4 }}>
            Software Engineer
          </Typography>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Crafting Digital <br />
            <span style={{ color: '#D4AF37' }}>Experiences</span>
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mb: 4, color: 'text.secondary' }}>
            I build accessible, pixel-perfect, and performant web experiences.
            Specialized in Next.js and Modern UI design.
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            endIcon={<ArrowForwardIcon />}
            size="large"
            sx={{ border: '1px solid white', color: 'white' }}
            // Add smooth scroll link here
            href="#projects" 
          >
            View My Work
          </Button>
        </Container>
      </Box>
      {/* HERO SECTION END */}

      {/* 3. PLACE PROJECTS COMPONENT HERE */}
      <Projects />
      <Contact />
      
    </>
  );
}