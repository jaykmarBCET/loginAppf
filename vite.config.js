import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port:5173,
    proxy: {
      '/api/v1/users': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1\/users/, '/api/v1/users'),
      }
    }
  }
});