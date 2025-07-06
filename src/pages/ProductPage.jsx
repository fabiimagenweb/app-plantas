// src/pages/ProductPage.jsx
import React from 'react';
import './ProductPage.css';
import PlantCard from '../components/PlantCard';

const productos = [
  { id: 1, nombre: 'Ficus', precio: 30, categoria: 'Purificadoras', imagen: '/ficus.png' },
  { id: 2, nombre: 'Lavanda', precio: 25, categoria: 'Aromáticas', imagen: '/lavanda.jpg' },
  { id: 3, nombre: 'helecho', precio: 20, categoria: 'Sombra', imagen: '/Helecho.jpg' },
  { id: 4, nombre: 'Bambú', precio: 35, categoria: 'Sombra', imagen: '/bambu.png' },
  { id: 5, nombre: 'Menta', precio: 22, categoria: 'Aromáticas', imagen: '/menta.png' },
  { id: 6, nombre: 'Aloe Vera', precio: 28, categoria: 'Purificadoras', imagen: '/aloe-vera.jpg' },
];

const ProductPage = () => {
  const categorias = [...new Set(productos.map((p) => p.categoria))];

  return (
    <div className="product-page">
      <h2>Nuestras Plantas</h2>
      {categorias.map((categoria) => (
        <div key={categoria}>
          <h3>{categoria}</h3>
          <div className="plantas-grid">
            {productos
              .filter((p) => p.categoria === categoria)
              .map((planta) => (
                <PlantCard
                  key={planta.id}
                  id={planta.id}
                  name={planta.nombre}
                  price={planta.precio}
                  image={planta.imagen}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
