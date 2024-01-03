/*
 * @Author: shenjilin-home
 * @Date: 2023-12-26 21:23:12
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-03 22:48:20
 * @Description: 
 */
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig((env) => {
  // const viteEnv = loadEnv(env.mode, `./env`);
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'MicroappuiButton',
        fileName: 'microappui-button',
      },
      minify: false,
      rollupOptions: {
        external: [
          // 除了 @microappui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @microappui 开头的依赖项一起处理掉
          /@microappui.*/, 
          'vue'
        ],
      },
    }
  }
})