// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-ecommerce/', // 👈 must match your GitHub repo
  plugins: [react()],
});
