// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/app-plantas/',  // 👈 esto es crucial
  plugins: [react()],
});
