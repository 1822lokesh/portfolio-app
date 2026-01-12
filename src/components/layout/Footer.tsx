'use client';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: '#0a0a0a', borderTop: '1px solid #333' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              PORTFOLIO.
            </Typography>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton href="https://github.com" target="_blank" color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:your@email.com" color="inherit">
              <EmailIcon />
            </IconButton>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
}