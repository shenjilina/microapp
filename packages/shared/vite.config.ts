/*
 * @Author: shenjilin-home
 * @Date: 2023-12-26 21:15:18
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2023-12-26 21:21:08
 * @Description: packages/shared/vite.config.ts
 */
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
    // outDir: 'dist',

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      // 构建的入口文件
      entry: './src/index.ts',

      // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
      // formats: ['es', 'umd'],

      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'OpenxuiShared',
      // 产物文件名称
      fileName: 'microappui-shared',
    },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: false,
    // 参考：https://cn.vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      external: [/lodash.*/],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量。即使不设置，构建工具也会为我们自动生成。个人倾向于不设置
        /*
        globals: {
          lodash: 'lodash'
        }
        */
      }
    }
  }
})
