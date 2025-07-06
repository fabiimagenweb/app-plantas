import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Función para cargar desde localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('carrito');
    return data ? JSON.parse(data) : undefined;
  } catch (err) {
    console.error("Error al leer del localStorage", err);
    return undefined;
  }
};

// Función para guardar en localStorage
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('carrito', JSON.stringify(state));
  } catch (err) {
    console.error("Error al guardar en localStorage", err);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadFromLocalStorage(), // <-- esto restaura los datos al cargar
  },
});

// Suscribirse a cambios y guardar en localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});

export default store;
