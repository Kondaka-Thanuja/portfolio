import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensure assets load correctly on Render
  build: {
    outDir: 'dist', // Ensures Vite outputs to dist folder
  },
})
