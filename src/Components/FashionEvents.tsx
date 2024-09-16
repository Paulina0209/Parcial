import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import '../Styles/FashionEvents.css'
import SFW from '../Images/Spring Fashion Week.jpg'
import Urban from '../Images/Street.jpg'
import HEC from '../Images/HEC.jpg'

const FashionEvents: React.FC = () => {
  const events = [
    {
      title: "Spring Fashion Week",
      description: "A week-long event showcasing the latest trends in spring fashion from top designers.",
      imageUrl: SFW,
    },
    {
      title: "Urban Streetwear Show",
      description: "Explore the latest streetwear trends in this exclusive urban fashion event.",
      imageUrl: Urban,
    },
    {
      title: "High-End Couture",
      description: "A glamorous night featuring high-end couture collections from the biggest names in fashion.",
      imageUrl: HEC,
    },
  ];

  const redirectToPage = (path: string) => {
    window.location.href = path; // Redirige a la nueva página en la misma pestaña
  };


  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Fashion Events and Shows
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join us for the most anticipated fashion events across the world. Explore our upcoming shows:
      </Typography>

      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={event.title}
                height="310"
                image={event.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
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

export default FashionEvents;