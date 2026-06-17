import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-crawl-snapshot',
      transformIndexHtml(html) {
        const snapPath = path.resolve('public/crawl-snapshot.html')
        if (fs.existsSync(snapPath)) {
          const snap = fs.readFileSync(snapPath, 'utf8')
          return html.replace('</body>', `${snap}\n</body>`)
        }
        return html
      },
    },
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-markdown') || id.includes('node_modules/remark') || id.includes('node_modules/micromark')) {
            return 'markdown'
          }
          if (id.includes('node_modules/react-router')) {
            return 'router'
          }
        },
      },
    },
  },
})
