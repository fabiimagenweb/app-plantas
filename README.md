# Paradise Nursery 🌱

Tienda de plantas hecha con React + Redux.

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Estructura de imágenes:**
   - Las imágenes de productos deben estar en la carpeta:  
     `public/app-plantas/`
   - Ejemplo:  
     `public/app-plantas/ficus.png`

4. **Ejecuta la app en modo desarrollo:**
   ```bash
   npm run dev
   ```
   - Abre [http://localhost:5173/app-plantas](http://localhost:5173/app-plantas) en tu navegador.

## Notas

- Si cambias el nombre de la carpeta de imágenes o el `basename` del router, actualiza las rutas en el array de productos.
- El carrito usa Redux y guarda los productos en el almacenamiento local del navegador.
- Para limpiar el carrito, usa el botón "Vaciar carrito".

---

## 2. **Pasos para subir tu proyecto a GitHub**

1. **Inicializa git (si no lo has hecho):**
   ```bash
   git init
   ```

2. **Agrega todos los archivos:**
   ```bash
   git add .
   ```

3. **Haz tu primer commit:**
   ```bash
   git commit -m "Proyecto Paradise Nursery listo"
   ```

4. **Crea el repositorio en GitHub** (desde la web).

5. **Agrega el remoto y sube tu código:**
   ```bash
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git branch -M main
   git push -u origin main
   ```

---

