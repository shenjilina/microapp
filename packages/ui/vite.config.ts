/*
 * @Author: shenjilin-home
 * @Date: 2024-01-02 21:12:43
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-11 23:21:48
 * @Description:
 */
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig(() => ({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'StoneUI',
//       fileName: 'stone-ui',
//     },
//     rollupOptions: {
//       external: [
//         // 除了 @stoneui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @stoneui 开头的依赖项一起处理掉
//         /@stoneui.*/,
//         'vue',
//       ],
//     },
//   },
// }));
import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/build.config';

export default defineConfig(({ mode }) => generateVueConfig({ mode }));
