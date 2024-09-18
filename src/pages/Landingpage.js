import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Function to handle Sign In button click
  const handleSignIn = () => {
    navigate('/home'); // Navigate to /home when Sign In is clicked
  };

  const handleExample = () => {
    navigate('/comp'); // Navigate to /home when Sign In is clicked
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F1F4F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Left Section with Bilderly and Sentences */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h3" gutterBottom color="#222831">
              Bilderly
            </Typography>
            <Typography variant="h6" gutterBottom color="#222831">
              Many questions in property
            </Typography>
            <Typography variant="h6" gutterBottom color="#222831">
              Need more than just a computer?
            </Typography>
            <Typography variant="h6" gutterBottom color="#222831">
              We've got your back with real-world solutions.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section with Sign In and Sign Up buttons */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#222831',
              padding: '40px',
              borderRadius: '12px',
            }}
          >
            <Typography variant="h4" gutterBottom color="#FFD369">
              Get Started
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFD369',
                color: '#222831',
                '&:hover': { backgroundColor: '#FFCD3C' },
                width: '200px',
                marginBottom: '20px',
              }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#FFD369',
                color: '#FFD369',
                '&:hover': { borderColor: '#FFCD3C', color: '#FFCD3C' },
                width: '200px',
              }}
              onClick={handleExample}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
