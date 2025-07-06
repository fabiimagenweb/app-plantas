// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'; // opcional para estilos

const Header = () => {
  const carrito = useSelector((state) => state.cart.items);
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-left">
        <h1>🌿 Paradise Nursery</h1>
      </div>

      <nav className="header-nav">
        {location.pathname !== '/' && (
          <Link to="/" className="nav-link">Inicio</Link>
        )}
        {location.pathname !== '/products' && (
          <Link to="/products" className="nav-link">Productos</Link>
        )}
        {location.pathname !== '/cart' && (
          <Link to="/cart" className="nav-link">Carrito 🛒 ({cantidadTotal})</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
