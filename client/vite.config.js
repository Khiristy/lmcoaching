import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSass from 'vite-plugin-sass';
import path from 'path';

export default defineConfig({
  plugins: [react(), viteSass()],
  css: {
    modules: {
      scopeBehaviour: 'global',
    },

  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@features': path.resolve(new URL('./src/features', import.meta.url).pathname),
      '@home': path.resolve(new URL('./src/features/Home', import.meta.url).pathname),
      '@shared': path.resolve(new URL('./src/features/Shared', import.meta.url).pathname),
      '@hooks': path.resolve(new URL('./src/hooks', import.meta.url).pathname),
      '@utils': path.resolve(new URL('./src/utils', import.meta.url).pathname),
    },
  },
  server: {
    mimeTypes: {
      '.jsx': 'application/javascript',
    },
    allowedHosts: ['.localhost'],
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
