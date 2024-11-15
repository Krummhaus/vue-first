import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Change to the desired port
    host: '0.0.0.0' // Ensure it's accessible from outside
  },

})
