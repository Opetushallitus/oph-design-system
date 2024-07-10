import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.ts?(x)'],
    coverage: {
      include: ['src/**/*.ts?(x)'],
      reporter: ['text'],
      exclude: ['**/*.{test,stories}.ts?(x)'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
