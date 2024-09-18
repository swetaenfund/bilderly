import React from 'react';
import { Box, Grid, Paper, Card, CardContent, Typography, Container, CardMedia, Button } from '@mui/material';

const SurfaceElements = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginTop: '20px' }}>
        MUI Surface Elements
      </Typography>
      <Grid container spacing={4}>
        {/* Paper Component */}
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#F1F4F8' }}
          >
            <Typography variant="h6">Paper Component</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              This is an example of the Paper component. It can be used for creating card-like surfaces.
            </Typography>
          </Paper>
        </Grid>

        {/* Card Component */}
        <Grid item xs={12} sm={6}>
          <Card
            sx={{ maxWidth: 345, backgroundColor: '#F1F4F8' }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/345x140"
              alt="Placeholder"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Card Component
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is an example of the Card component. It is often used to display content and actions.
              </Typography>
              <Button size="small" color="primary" sx={{ marginTop: '10px' }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Container Component */}
        <Grid item xs={12} sm={6}>
          <Container
            sx={{
              padding: '20px',
              backgroundColor: '#F1F4F8',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6">Container Component</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              This is an example of the Container component. It provides a fixed-width layout with centered content.
            </Typography>
          </Container>
        </Grid>

        {/* Box Component */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              padding: '20px',
              backgroundColor: '#FFD369',
              color: '#222831',
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            <Typography variant="h6">Box Component</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              This is an example of the Box component. It is a versatile container that can be styled and customized.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SurfaceElements;
