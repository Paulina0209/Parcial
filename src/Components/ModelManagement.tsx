import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import '../Styles/ModelManagement.css'
import Modelo1 from '../Images/Modelo1.jpg'
import Modelo2 from '../Images/Modelo2.jpg'
import Modelo3 from '../Images/Modelo3.jpg'

const ModelManagement: React.FC = () => {
  const references = [
    {
      name: "Jane Dunson",
      description: "Jane has been modeling with us for over 3 years and has walked in some of the top fashion shows around the world.",
      imageUrl: Modelo1,
    },
    {
      name: "John Stewart",
      description: "John is a rising star in the modeling industry, featured in major campaigns for high-end brands.",
      imageUrl: Modelo2,
    },
    {
      name: "Emily Clark",
      description: "Emily has made her mark as a commercial model, with appearances in top magazines and commercials.",
      imageUrl: Modelo3,
    },
  ];

  const redirectToPage = (path: string) => {
    window.location.href = path; // Redirige a la nueva página en la misma pestaña
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Model Management References
      </Typography>
      <Typography variant="body1" gutterBottom>
        Meet some of the models who have worked with us and made a name in the fashion world:
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {references.map((model, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={model.name}
                height= "300"
                image={model.imageUrl}
                sx={{ 
                  objectFit: 'cover', 
                  clipPath: 'inset(0 0 5% 0)' 
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {model.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {model.description}
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

export default ModelManagement;