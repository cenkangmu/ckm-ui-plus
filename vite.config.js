import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from 'path'
export default defineConfig({
  server:{
    port:'8100',
    host:'0.0.0.0',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
            '@import "@/assets/css/index.scss";'
      }
    }
  }
})
