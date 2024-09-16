import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import '../Styles/ExclusiveMembership.css';
import golden from '../Images/golden.jpg'
import Silver from '../Images/Silver.jpg'
import Platinum from '../Images/Platinum.jpg'

const ExclusiveMembership: React.FC = () => {
  const memberships = [
    {
      title: "Silver Membership",
      description: "Access to exclusive model events, personalized coaching sessions, and discounts on services.",
      imageUrl: Silver,
    },
    {
      title: "Gold Membership",
      description: "All Silver benefits, plus professional photoshoots and VIP access to fashion shows.",
      imageUrl: golden,
    },
    {
      title: "Platinum Membership",
      description: "All Gold benefits, with personal styling sessions and premium exposure to top agencies.",
      imageUrl: Platinum,
    },
  ];

  const redirectToPage = (path: string) => {
    window.location.href = path; 
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Exclusive Memberships
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join our exclusive membership plans and gain access to premium services and events tailored for models.
      </Typography>

      <Grid container spacing={3}>
        {memberships.map((membership, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={membership.title}
                height="310"
                image={membership.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {membership.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {membership.description}
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

export default ExclusiveMembership;