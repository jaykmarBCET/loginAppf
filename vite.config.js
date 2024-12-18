import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config
export default defineConfig({
  plugins: [react()],
  server: {
    port:5173,
    proxy: {
      '/api/v1/users': {
        target: 'https://383xj6-8000.csb.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1\/users/, '/api/v1/users'),
      }
    }
  }
});
