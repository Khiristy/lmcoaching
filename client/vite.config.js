import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  css: {
    modules: {
      scopeBehaviour: 'global', // Utilisez "global" si vous ne voulez pas de CSS Modules
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  server: {
    mimeTypes: {
      '.jsx': 'application/javascript',
    },
    allowedHosts: [".localhost"],
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});