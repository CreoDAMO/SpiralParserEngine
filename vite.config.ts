import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Use the new Tailwind CSS v4 Vite plugin
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
      '~': resolve(__dirname, './'),
    },
  },
  root: './client',
  publicDir: './public',
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-tabs', '@radix-ui/react-button'],
          editor: ['@monaco-editor/react'],
          three: ['three'],
          chart: ['recharts'],
          query: ['@tanstack/react-query']
        }
      }
    },
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    target: 'esnext'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      },
      '/socket.io': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        ws: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@monaco-editor/react']
  }
});