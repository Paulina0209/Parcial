import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode; // Define los componentes hijos de la ruta
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext); // Accede al contexto de autenticación

  if (!auth?.token) {
    // Si no hay un token, redirige a /login
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderiza los hijos (children)
  return <>{children}</>;
};

export default ProtectedRoute;