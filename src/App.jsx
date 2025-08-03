// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';

const AppRoutes = () => {
  const location = useLocation();
  // Esta línea es para controlar la visibilidad del Header, no afecta el enrutamiento base
  const esLanding = location.pathname === '/'; 

  return (
    <>
      {!esLanding && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Opcional: Ruta para manejar 404 si el path no coincide */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router basename="/app-plantas"> {/* <-- ¡Cambia esta línea! */}
      <AppRoutes />
    </Router>
  );
};

export default App;
