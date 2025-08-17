import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  build: {
    ssr: './src/index.ts', // サーバーサイドバンドル
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.ts',
    },
  },
});