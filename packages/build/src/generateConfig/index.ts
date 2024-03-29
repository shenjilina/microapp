/*
 * @Author: shenjilin-home
 * @Date: 2024-01-05 22:31:49
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-11 23:14:09
 * @Description: build 模块的出口 整合构建配置
 */
import { mergeConfig, UserConfig } from 'vite';
import { PackageJson } from 'type-fest';
import { readJsonFile, absCwd } from '../utils';
import { getOptions, GenerateConfigOptions } from './options';
import { getPlugins } from './plugins';
import { getExternal } from './external';
import { getLib } from './lib';

export async function generateConfig(
  customOptions?: GenerateConfigOptions,
  viteConfig?: UserConfig,
) {
  // 获取配置选项
  const options = getOptions(customOptions);

  // 获取每个子包的 package.json 对象
  const packageJson = await readJsonFile<PackageJson>(absCwd('package.json'));

  // 生成产物相关配置 build.lib
  const libOptions = getLib(packageJson, options);

  // 生成依赖外部化相关配置 build.rollupOptions.external
  const external = getExternal(packageJson, options);

  // 插件相关，获取构建配置的plugins对象
  const plugins = getPlugins(packageJson, options);

  // 拼接各项配置
  const result: UserConfig = {
    plugins,
    build: {
      ...libOptions,
      rollupOptions: {
        external,
      },
    },
  };

  // 与自定义 vite 配置合并，生成最终的配置
  return mergeConfig(result, viteConfig || {}) as UserConfig;
}
// 导出其他模块
export * from './plugins';
export * from './options';
export * from './lib';
export * from './external';
export * from './pluginMoveDts';
export * from './pluginSetPackageJson';
