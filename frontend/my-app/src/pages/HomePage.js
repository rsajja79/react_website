import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, CssBaseline, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  let navigate = useNavigate();

  const navigateToDashboard = (userType) => {
    navigate('/dashboard', { state: { userType } });
  };
  

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            VirtualTA
          </Typography>
          {/* Add additional top bar content here if needed */}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundSize: 'cover',
          p: 4
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#fff' }}>
                Instant notes, flashcards, quizzes, and more.
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ color: '#ddd' }}>
                Upload any audio, video, website, or PDF and get beautifully formatted notes!
              </Typography>
              <Box mt={4}>
                <Button variant="contained" color="primary" size="large" onClick={() => navigateToDashboard('instructor')}>
                  Instructor
                </Button>
                <Button variant="contained" color="secondary" size="large" onClick={() => navigateToDashboard('student')} sx={{ ml: 2 }}>
                  Student
                </Button>
              </Box>
            </Grid>
            <

Grid item xs={12} md={6}>
{/* Assuming you have a video to embed */}
<Paper elevation={6} sx={{
position: 'relative',
paddingTop: '56.25%', // 16:9 Aspect Ratio
overflow: 'hidden'
}}>
<iframe
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
border: 0
}}
src="https://www.youtube.com/embed/0jP4T_IV1XU?si=W8dWApJBuvYzAIaV" // Replace with your video embed URL

frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
/>
</Paper>
</Grid>
</Grid>
</Container>
</Box>
</>
);
}