import fs from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const CV_FILE = 'Ubaid_Ur_Rehman_CV.pdf'
const hasCv = fs.existsSync(new URL(`./public/${CV_FILE}`, import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'import.meta.env.VITE_CV_URL': JSON.stringify(hasCv ? `/${CV_FILE}` : null),
  },
})
