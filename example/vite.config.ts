import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const server = {
  host: '0.0.0.0',
  port: 3000,
  strictPort: true,
  allowedHosts: ['host.docker.internal'],
};

export default defineConfig({
  plugins: [react()],
  server,
  preview: server,
});
