'use client';
import { Container, Typography, Card, CardContent, CardMedia, Chip, Box } from '@mui/material';

// No Grid import needed! We use Box with CSS Grid.

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A real-time analytics dashboard using Next.js and Tremor.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: 'https://via.placeholder.com/600x400', 
  },
  {
    title: 'AI Chat Interface',
    description: 'Chatbot wrapper integration using OpenAI API.',
    tags: ['React', 'MUI', 'OpenAI'],
    image: 'https://via.placeholder.com/600x400',
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, fontWeight: 'bold' }}>
          Selected Works
        </Typography>
        
        {/* THE FIX: Use Box with 'display: grid' */}
        <Box 
          sx={{ 
            display: 'grid',
            // This creates a 1 column layout on mobile (xs), and 2 columns on desktop (md)
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4 // This adds the spacing
          }}
        >
          {projects.map((project, index) => (
            
            // Just a standard Box wrapper now
            <Box key={index}>
              <Card sx={{ height: '100%', borderRadius: 0, transition: '0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                <CardMedia component="img" height="250" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        
      </Container>
    </Box>
  );
}