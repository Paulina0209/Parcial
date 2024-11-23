import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModelManagement from './Components/ModelManagement';
import MakeUpProducts from './Components/MakeUpProducts';
import FashionEvents from './Components/FashionEvents';
import PhotoSales from './Components/PhotoSales';
import ExclusiveMemberships from './Components/ExclusiveMemberships';
import HiddenServices from './Components/HiddenServices';
import LegalServices from './Components/LegalServices';
import Login from './Components/Login';
import Register from './Components/register';
import Checkout from './Components/Checkout'; 
import ProtectedRoute from './Components/ProtectedRoute'; 

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<LegalServices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas */}
      <Route
        path="/ModelManagement"
        element={
          <ProtectedRoute>
            <ModelManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/MakeUpProducts"
        element={
          <ProtectedRoute>
            <MakeUpProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/FashionEvents"
        element={
          <ProtectedRoute>
            <FashionEvents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/PhotoSales"
        element={
          <ProtectedRoute>
            <PhotoSales />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ExclusiveMembership"
        element={
          <ProtectedRoute>
            <ExclusiveMemberships />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hidden-services"
        element={
          <ProtectedRoute>
            <HiddenServices />
          </ProtectedRoute>
        }
      />

      {/* Ruta protegida para pagos */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;