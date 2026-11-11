import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project site: https://<user>.github.io/peace-ejiga-portfolio/
// Local dev stays at '/'; the Pages build uses the repo sub-path.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/peace-ejiga-portfolio/' : '/',
})
