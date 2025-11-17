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
    plugins: [
      {
        name: 'fix-code',
        renderChunk(_, chunk) {
          //Fixes Next.js error "Font loaders must be called and assigned to a const in the module scope"
          chunk.code = chunk.code.replace('var openSans', 'const openSans');
          return chunk;
        },
      },
    ],
  },
]);
