// src/components/PlantCard.jsx
import React from 'react';
import './PlantCard.css'; // opcional para estilos personalizados
import { useDispatch, useSelector } from 'react-redux';
import { agregarAlCarrito } from '../redux/cartSlice';

const PlantCard = ({ id, name, price, image }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(agregarAlCarrito({ id, nombre: name, precio: price, imagen: image }));
    }
  };

  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Agregado al carrito' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default PlantCard;
