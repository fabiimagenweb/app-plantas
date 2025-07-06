// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">🌿 Paradise Nursery</h1>
        <p className="description">
          En Paradise Nursery, creemos que las plantas de interior no solo decoran tu espacio, sino que también limpian el aire, elevan el ánimo y dan vida a tu hogar. Descubre nuestra colección seleccionada para ti.
        </p>
        <Link to="/products" className="start-button">Comenzar</Link>
      </div>
    </div>
  );
};

export default LandingPage;
