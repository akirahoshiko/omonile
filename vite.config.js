import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://<user>.github.io/<repo>/
// The sub-path follows the repository name automatically (GITHUB_REPOSITORY = "owner/repo" in Actions).
// Local dev and other hosts stay at '/'.
const repo = (process.env.GITHUB_REPOSITORY || '/omonile').split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? `/${repo}/` : '/',
})
