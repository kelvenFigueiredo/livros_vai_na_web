import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/livros_vai_na_web/', // Nome do repositório no GitHub
  plugins: [react()],
})