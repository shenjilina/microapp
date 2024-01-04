import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => ({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'MicroappUI',
      fileName: 'microapp-ui',
    },
    rollupOptions: {
      external: [
        // 除了 @microappui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @microappui 开头的依赖项一起处理掉
        /@microappui.*/,
        'vue',
      ],
    },
  },
}));
