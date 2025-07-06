import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // ← importante para que coincida con la estructura de localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    agregarAlCarrito: (state, action) => {
      const itemExistente = state.items.find(item => item.id === action.payload.id);
      if (itemExistente) {
        itemExistente.cantidad += 1;
      } else {
        state.items.push({ ...action.payload, cantidad: 1 });
      }
    },
    eliminarDelCarrito: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementarCantidad: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.cantidad += 1;
    },
    decrementarCantidad: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.cantidad > 1) item.cantidad -= 1;
    },
    vaciarCarrito: (state) => {
      state.items = [];
    },
  },
});

export const {
  agregarAlCarrito,
  eliminarDelCarrito,
  incrementarCantidad,
  decrementarCantidad,
  vaciarCarrito,
} = cartSlice.actions;

export default cartSlice.reducer;
