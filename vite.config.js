import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'vendor-mui';
            }
            if (id.includes('antd')) {
              return 'vendor-antd';
            }
            if (id.includes('@tanstack') || id.includes('axios')) {
              return 'vendor-query';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'vendor-ui-extras';
            }
            return 'vendor-core';
          }
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
});