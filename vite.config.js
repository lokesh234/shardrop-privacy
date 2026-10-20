import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/shardrop-privacy/
export default defineConfig({
  base: '/shardrop-privacy/',
  plugins: [react()],
})
