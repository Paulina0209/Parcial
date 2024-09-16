import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import '../Styles/LegalServices.css'; 

const LegalServices: React.FC = () => {
  const redirectToPage = (path: string) => {
    window.location.href = path; 
  };

  return (
    <Box className="legal-services-container">
      <Typography variant="h4" gutterBottom className='text'>
        Our Services
      </Typography>
      <Typography variant="body1" gutterBottom className='text'>
        We offer a variety of services for models
      </Typography>

      <Box className="legal-services-buttons">
        <Button 
          className="legal-services-button"
          variant="contained" 
          onClick={() => redirectToPage('/ModelManagement')}
        >
          Model Management
        </Button>
        <Button 
          className="legal-services-button"
          variant="contained" 
          onClick={() => redirectToPage('/ExclusiveMembership')}
        >
          Exclusive Membership
        </Button>
        <Button 
          className="legal-services-button"
          variant="contained" 
          onClick={() => redirectToPage('/FashionEvents')}
        >
          Fashion Events
        </Button>
        <Button 
          className="legal-services-button"
          variant="contained" 
          onClick={() => redirectToPage('/MakeUpProducts')}
        >
          Make-Up Products
        </Button>
        <Button 
          className="legal-services-button"
          variant="contained" 
          onClick={() => redirectToPage('/PhotoSales')}
        >
          Photo Sales
        </Button>
      </Box>
    </Box>
  );
};

export default LegalServices;
