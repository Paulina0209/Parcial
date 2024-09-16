import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import coca from '../Images/Cocaine.jpg'
import LSD from '../Images/LSD.jpg'
import tusi from '../Images/Tusi.jpg'

const HiddenServices: React.FC = () => {
  const services = [
    {
      title: "Cocaine",
      description: (
        <>
            10 grams of white magic powder,<br />
            enjoy an excellent experience <br />
            Price: 1.200 USD
        </>
    ),
      imageUrl: coca,
    },
    {
      title: "LSD",
      description: (
        <>
          "Experience other worlds, visit incredible places without leaving the comfort of your home, 
          all within the reach of a pill" <br />
          Price: 30 USD
        </>
      ),
      imageUrl: LSD,
    },
    {
      title: "Ketamines",
      description: (
        <>
          "10 grams of happiness at your fingertips, enjoy it"<br />
          Price: 1.200 USD
        </>
      ),
      imageUrl: tusi,
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
        {services.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={photo.title}
                height="270"
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

export default HiddenServices;