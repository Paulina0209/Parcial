import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import '../Styles/PhotoSales.css'
import VG from '../Images/VG.jpg'
import UL from '../Images/UL.jpg'
import Fs from '../Images/FS.jpg'

const PhotoSales: React.FC = () => {
  const photos = [
    {
      title: "Fashion Shoot 2023",
      description: "High-quality photoshoot featuring modern streetwear.",
      imageUrl: Fs,
    },
    {
      title: "Vintage Glamour",
      description: "A classic vintage-inspired photoshoot with a modern twist.",
      imageUrl: VG,
    },
    {
      title: "Urban Lifestyle",
      description: "Dynamic and vibrant shots showcasing urban lifestyle trends.",
      imageUrl: UL,
    },
  ];

  const redirectToPage = (path: string) => {
    window.location.href = path; // Redirige a la nueva página en la misma pestaña
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Photo Sales
      </Typography>
      <Typography variant="body1" gutterBottom>
        Browse through our exclusive collection of professional photoshoots available for sale:
      </Typography>

      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={photo.title}
                height="310"
                image={photo.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {photo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {photo.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => redirectToPage('/')}
        sx={{ marginTop: 2 }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default PhotoSales;