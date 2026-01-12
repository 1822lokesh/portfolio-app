'use client';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: '#121212', color: 'white' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
          Have a project in mind or just want to say hi, Iam always open to discussing new projects and opportunities.
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          
          {/* REPLACED GRID WITH BOX + CSS GRID */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // 1 column on mobile, 2 on desktop
            gap: 3 
          }}>
            
            {/* Name Input */}
            <Box>
              <TextField 
                fullWidth 
                label="Name" 
                variant="outlined" 
                sx={{ 
                  '& .MuiOutlinedInput-root': { color: 'white' }, 
                  '& .MuiInputLabel-root': { color: 'gray' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' }
                }} 
              />
            </Box>
            
            {/* Email Input */}
            <Box>
              <TextField 
                fullWidth 
                label="Email" 
                variant="outlined"
                sx={{ 
                    '& .MuiOutlinedInput-root': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'gray' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' }
                  }} 
              />
            </Box>
            
            {/* Message Input - Spans full width */}
            <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
              <TextField 
                fullWidth 
                label="Message" 
                multiline 
                rows={4} 
                variant="outlined"
                sx={{ 
                    '& .MuiOutlinedInput-root': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'gray' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' }
                  }} 
              />
            </Box>

            {/* Submit Button - Spans full width */}
            <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' }, textAlign: 'center', mt: 2 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                endIcon={<SendIcon />}
                sx={{ 
                  px: 5, 
                  py: 1.5, 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  borderRadius: 0 
                }}
              >
                Send Message
              </Button>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}