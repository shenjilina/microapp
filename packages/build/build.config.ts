/*
 * @Author: shenjilin-home
 * @Date: 2024-01-10 21:57:25
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-10 22:12:24
 * @Description:
 */
import { UserConfig } from 'vite';
import {
  generateConfig as baseGenerateConfig,
  GenerateConfigOptions,
} from './src';
import { absCwd } from './src/utils';

/** 构建普通的纯 TS / JS 模块的预设 */
export function generateConfig(
  customOptions?: GenerateConfigOptions,
  viteConfig?: UserConfig,
) {
  return baseGenerateConfig({
    // 指定 d.ts 文件相关 tsconfig 的位置
    dts: absCwd('../../tsconfig.src.json'),
    ...customOptions,
  }, viteConfig);
}
