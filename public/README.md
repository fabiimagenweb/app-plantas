# 🌿 Paradise Nursery

Este es un proyecto final de una tienda de plantas de interior, hecho con **React**, **Redux Toolkit** y **React Router DOM**.

## 🚀 Características

- Página de inicio con nombre, imagen de fondo, descripción y botón de inicio.
- Página de productos con al menos 6 plantas categorizadas.
- Funcionalidad de "Agregar al carrito" con Redux.
- Página de carrito con:
    - Incrementar/disminuir cantidad
    - Eliminar producto
    - Total de productos y total a pagar
    - Botones para seguir comprando y pagar (próximamente)

## 🛠️ Tecnologías

- React
- Redux Toolkit
- React Router DOM
- Vite

## 📁 Estructura del proyecto

```
/public
    └── README.md
/src
    ├── assets/
    ├── components/
    ├── features/
    │   └── cart/
    ├── pages/
    ├── App.jsx
    ├── main.jsx
    └── store.js
```

- **assets/**: Imágenes y recursos estáticos.
- **components/**: Componentes reutilizables (Navbar, ProductCard, etc.).
- **features/cart/**: Lógica y slice de Redux para el carrito.
- **pages/**: Vistas principales (Home, Products, Cart).
- **App.jsx**: Componente principal y rutas.
- **main.jsx**: Punto de entrada de la app.
- **store.js**: Configuración de Redux.

## 📦 Instalación

1. Clona el repositorio.
2. Instala dependencias:
     ```bash
     npm install
     ```
3. Inicia el servidor de desarrollo:
     ```bash
     npm run dev
     ```

## ✨ Créditos

Proyecto realizado para el curso de React en Coursera.