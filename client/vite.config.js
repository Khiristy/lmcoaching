import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSass from 'vite-plugin-sass';
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    viteSass()
  ],

  css: {
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
