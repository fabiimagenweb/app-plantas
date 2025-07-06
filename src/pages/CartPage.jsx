// src/pages/CartPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  eliminarDelCarrito,
  incrementarCantidad,
  decrementarCantidad,
  vaciarCarrito, // ← ¡faltaba importar esto!
} from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carrito = useSelector((state) => state.cart.items);

  const totalPlantas = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const costoTotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {carrito.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.imagen} alt={item.nombre} />
                <div className="item-info">
                  <h4>{item.nombre}</h4>
                  <p>Precio unitario: ${item.precio}</p>
                  <div className="item-controls">
                    <button onClick={() => dispatch(decrementarCantidad(item.id))}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => dispatch(incrementarCantidad(item.id))}>+</button>
                  </div>
                  <button
                    className="eliminar"
                    onClick={() => dispatch(eliminarDelCarrito(item.id))}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total de artículos: {totalPlantas}</p>
            <p>Total a pagar: ${costoTotal}</p>
            <button className="pagar" onClick={() => alert('Próximamente 💳')}>
              Pagar
            </button>
            <button className="seguir" onClick={() => navigate('/productos')}>
              Seguir comprando
            </button>
            <button onClick={() => dispatch(vaciarCarrito())}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
