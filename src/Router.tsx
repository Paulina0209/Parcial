import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModelManagement from './Components/ModelManagement';
import MakeUpProducts from './Components/MakeUpProducts';
import FashionEvents from './Components/FashionEvents';
import PhotoSales from './Components/PhotoSales';
import ExclusiveMemberships from './Components/ExclusiveMemberships';
import HiddenServices from './Components/HiddenServices'; 
import LegalServices from './Components/LegalServices';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<LegalServices />} />
      <Route path="/ModelManagement" element={<ModelManagement />} />
      <Route path="/MakeUpProducts" element={<MakeUpProducts />} />
      <Route path="/FashionEvents" element={<FashionEvents />} />
      <Route path="/PhotoSales" element={<PhotoSales />} />
      <Route path="/ExclusiveMembership" element={<ExclusiveMemberships />} />
      <Route path="/hidden-services" element={<HiddenServices />} />
    </Routes>
  );
};

export default AppRouter;