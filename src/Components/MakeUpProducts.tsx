import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import '../Styles/MakeUpProducts.css'
import LuLi from '../Images/LuLi.jpg'
import BP from '../Images/BP.jpg'
import mascara from '../Images/Mascara.jpg'

const MakeUpProducts: React.FC = () => {
  const products = [
    {
      title: "Luxury Lipstick",
      description: "Long-lasting, vibrant colors for a stunning look.",
      imageUrl: LuLi,
    },
    {
      title: "Blush Palette",
      description: "A versatile blush palette with shades for every skin tone.",
      imageUrl: BP,
    },
    {
      title: "Waterproof Mascara",
      description: "Smudge-proof mascara that lasts all day.",
      imageUrl: mascara,
    },
  ];

  const redirectToPage = (path: string) => {
    window.location.href = path; // Redirige a la nueva página en la misma pestaña
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Make-Up Products
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover our range of premium make-up products designed to enhance your natural beauty:
      </Typography>

      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="340"
                image={product.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
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

export default MakeUpProducts;