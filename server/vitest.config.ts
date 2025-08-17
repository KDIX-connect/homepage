// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',

    include: [
      path.resolve(__dirname, 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'),
    ],

    exclude: [
      'node_modules',
      'dist',
      '.idea',
      '.git',
      '.cache',
    ],

    testTimeout: 10000,

    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        maxThreads: 4,
      },
    },
  },
});
