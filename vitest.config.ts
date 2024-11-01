import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './vitest-setup.ts',
    environment: 'jsdom',
    include: ['src/**/*.test.ts?(x)'],
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
