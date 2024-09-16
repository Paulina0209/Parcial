import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/hidden-services');
  };

  return (
    <footer onDoubleClick={handleDoubleClick}>
      <p>&copy; 2024 Andrea's Beauty Empire. All rights reserved.</p>
    </footer>
  );
};

export default Footer;