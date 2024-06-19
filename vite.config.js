import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const projectRootDir = path.resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  // root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'), // <---- add this
      '~bootstrap': path.resolve(projectRootDir , 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})
