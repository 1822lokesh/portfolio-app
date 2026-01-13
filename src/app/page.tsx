import { Stack, Tooltip, Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// 1. IMPORT THE PROJECT COMPONENT HERE
import Projects from '@/components/sections/Projects'; 
import Contact from '@/components/sections/Contact';
import { FadeIn } from '@/components/ui/MotionBox';
import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiDjango } from 'react-icons/si';



const skills = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiPython, name: 'Python' },
  { icon: SiDjango, name: 'Django' },
];

export default function Home() {
  return (
    // 2. WRAP EVERYTHING IN A FRAGMENT (<> ... </>)
    <>
      {/* HERO SECTION START */}
      <FadeIn>
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
      </FadeIn>
<Box sx={{ py: 5, borderBottom: '1px solid #333' }}>
  <Container>
    <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2, textAlign: 'center' }}>
      Trusted Technologies
    </Typography>
    <Stack direction="row" justifyContent="center" gap={4} flexWrap="wrap">
      {skills.map((Skill) => (
        <Tooltip title={Skill.name} key={Skill.name}>
          <Box sx={{ 
            fontSize: '2.5rem', 
            color: 'gray', 
            transition: '0.3s', 
            '&:hover': { color: '#3795d4', transform: 'translateY(-5px)' } 
          }}>
            <Skill.icon />
          </Box>
        </Tooltip>
      ))}
    </Stack>
  </Container>
</Box>
      {/* 3. PLACE PROJECTS COMPONENT HERE */}
      <Projects />
      <Contact />
      
    </>
  );
}