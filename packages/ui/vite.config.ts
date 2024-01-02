import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig((env) => {
  console.log('env: ', env);
  // const viteEnv = loadEnv(env.mode, `./env`);
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: './src/index.ts',
      },
    }
  }
})