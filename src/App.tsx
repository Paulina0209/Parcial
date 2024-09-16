import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRouter from './Router'; // Added centralized routing
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <AppRouter /> 
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;