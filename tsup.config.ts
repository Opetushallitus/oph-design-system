import { defineConfig } from 'tsup';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';

export default defineConfig([
  {
    entry: [
      'src/**/*@(ts|tsx)',
      '!src/**/*.@(test|stories).*',
      '!src/story-common.ts',
    ],
    clean: true,
    dts: true,
    format: ['esm'],
    minify: false,
    sourcemap: true,
    splitting: true,
    target: 'es2022',
    treeshake: false,
    bundle: true,
    external: ['@mui/utils', '@mui/icons-material'],
    outDir: 'dist',
    esbuildPlugins: [
      preserveDirectivesPlugin({
        directives: ['use client', 'use server'],
        include: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
      }),
    ],
  },
]);
