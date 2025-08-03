// src/components/PlantCard.jsx
import React from 'react';
import './PlantCard.css'; // opcional para estilos personalizados
import { useDispatch } from 'react-redux';
import { agregarAlCarrito } from '../redux/cartSlice';

const PlantCard = ({ id, nombre, precio, imagen }) => {
  const dispatch = useDispatch();

  return (
    <div className="plant-card">
      <img src={imagen} alt={nombre} />
      <h4>{nombre}</h4>
      <p>${precio}</p>
      <button
        onClick={() =>
          dispatch(
            agregarAlCarrito({
              id,
              nombre,
              precio,
              imagen
            })
          )
        }
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default PlantCard;
