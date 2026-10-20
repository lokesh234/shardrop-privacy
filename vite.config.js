import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/prismfall-privacy/
export default defineConfig({
  base: '/prismfall-privacy/',
  plugins: [react()],
})
