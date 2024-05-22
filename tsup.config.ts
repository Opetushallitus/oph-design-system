import { defineConfig } from 'tsup';

export default defineConfig([
  {
    // These are client components. They will get the 'use client' at the top.
    entry: ['src/index.ts', 'src/theme/index.ts', 'src/next/theme/index.ts'],
    clean: true,
    dts: true,
    format: ['esm'],
    minify: false,
    sourcemap: true,
    splitting: true,
    target: 'es2022',
    treeshake: false,
    bundle: true,
    // However you like this.
    external: ['@mui/utils'],
    outDir: 'dist',
    plugins: [
      {
        name: 'fix-code',
        renderChunk(_, chunk) {
          let code = chunk.code;
          if (chunk.entryPoint) {
            code = `"use client";\n${code}`;
          }
          //Fixes Next.js error "Font loaders must be called and assigned to a const in the module scope"
          if (chunk.entryPoint?.includes('/next/theme/')) {
            code = code.replace('var openSans', 'const openSans');
          }
          return { code };
        },
      },
    ],
  },
]);
