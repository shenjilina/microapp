/*
 * @Author: shenjilin-home
 * @Date: 2024-01-02 21:52:21
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-03 22:57:31
 * @Description: 
 */
// demo/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@microappui\/(.+)$/, 
        replacement: join(__dirname, '../..', 'packages', '$1', 'src') 
      },
    ]
  }
})
