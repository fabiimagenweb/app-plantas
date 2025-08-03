// src/pages/ProductPage.jsx
import React from 'react';
import './ProductPage.css';
import PlantCard from '../components/PlantCard';

const productos = [
  { id: 1, nombre: 'Ficus', precio: 30, categoria: 'Purificadoras', imagen: '/app-plantas/ficus.png' },
  { id: 2, nombre: 'Lavanda', precio: 25, categoria: 'Aromáticas', imagen: '/app-plantas/lavanda.jpg' },
  { id: 3, nombre: 'Helecho', precio: 20, categoria: 'Sombra', imagen: '/app-plantas/Helecho.jpg' },
  { id: 4, nombre: 'Bambú', precio: 35, categoria: 'Sombra', imagen: '/app-plantas/bambu.png' },
  { id: 5, nombre: 'Menta', precio: 22, categoria: 'Aromáticas', imagen: '/app-plantas/menta.png' },
  { id: 6, nombre: 'Aloe Vera', precio: 28, categoria: 'Purificadoras', imagen: '/app-plantas/aloe-vera.jpg' },

  // Nuevas plantas
  { id: 7, nombre: 'Astromelia Amarilla', precio: 8.99, categoria: 'Florales', imagen: '/app-plantas/astromelia amarilla.png' },
  { id: 8, nombre: 'Astromelia Blanca', precio: 8.99, categoria: 'Florales', imagen: '/app-plantas/astromelia blanca.png' },
  { id: 9, nombre: 'Astromelia Naranja', precio: 8.99, categoria: 'Florales', imagen: '/app-plantas/astromelia naranja.png' },
  { id: 10, nombre: 'Bonsai Ciprés Blanco', precio: 25.99, categoria: 'Bonsai', imagen: '/app-plantas/bonsai cipres blanco.png' },
  { id: 11, nombre: 'Caléndula', precio: 6.99, categoria: 'Florales', imagen: '/app-plantas/calendula.png' },
  { id: 12, nombre: 'Cartucho Amarillo', precio: 7.99, categoria: 'Florales', imagen: '/app-plantas/cartucho amarillo.png' },
  { id: 13, nombre: 'Cartucho Blanco', precio: 7.99, categoria: 'Florales', imagen: '/app-plantas/cartucho blanco.png' },
  { id: 14, nombre: 'Ciprés Dorado Bonsai', precio: 27.99, categoria: 'Bonsai', imagen: '/app-plantas/cipres dorado bonsai.png' },
  { id: 15, nombre: 'Gerbera', precio: 5.99, categoria: 'Florales', imagen: '/app-plantas/gerbera.png' },
  { id: 16, nombre: 'Lengua de Suegra', precio: 12.99, categoria: 'Purificadoras', imagen: '/app-plantas/lengua de suegra.jpg' },
  { id: 17, nombre: 'Margarita', precio: 5.99, categoria: 'Florales', imagen: '/app-plantas/margarita.png' },
  { id: 18, nombre: 'Orquídea Pintada', precio: 19.99, categoria: 'Florales', imagen: '/app-plantas/orquidea pintada.png' },
  { id: 19, nombre: 'Orquídea Púrpura', precio: 19.99, categoria: 'Florales', imagen: '/app-plantas/orquidea purpura.png' },
  { id: 20, nombre: 'Pino Bonsai', precio: 22.99, categoria: 'Bonsai', imagen: '/app-plantas/pino bonsai.png' }
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
                  nombre={planta.nombre}
                  precio={planta.precio}
                  imagen={planta.imagen}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
