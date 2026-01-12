'use client';
import { Fab, Fade, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function ScrollToTop() {
  // 1. Trigger: Returns true when user scrolls down more than 100px
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Show button after scrolling 100px
  });

  const handleClick = () => {
    // 2. Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9999, // Ensure it sits on top of everything
        }}
      >
        <Fab 
          onClick={handleClick} 
          size="medium" 
          color="primary" 
          aria-label="scroll back to top"
          sx={{
            color: 'white', // Icon color
            boxShadow: '0px 4px 20px rgba(0,0,0,0.5)', // Nice glow effect
            '&:hover': {
              transform: 'scale(1.1)', // Subtle grow animation
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}