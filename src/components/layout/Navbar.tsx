'use client';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const navItems = ['About', 'Projects', 'Contact'];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <AppBar 
      position="fixed" 
      // UPDATE THIS SX PROP BELOW:
      sx={{ 
        background: 'rgba(18, 18, 18, 0.7)', // 70% opacity black
        backdropFilter: 'blur(12px)',        // The blur effect
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)', // Thin border
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}>
            LOKESH K H
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} onClick={() => scrollToSection(item.toLowerCase())} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}