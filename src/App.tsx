import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRouter from './Router'; // Centraliza las rutas en AppRouter
import './App.css';
import { AuthProvider } from './context/AuthContext'; // Importa el AuthProvider

const App: React.FC = () => {
  return (
    <AuthProvider>
      {/* Envuelve toda la aplicación con AuthProvider para compartir el contexto */}
      <Router>
        <div className="app">
          <Header />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;