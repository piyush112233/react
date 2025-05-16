import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005 // यहाँ जो भी port चाहिए वो डाल दो
  }
})
