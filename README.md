<!--
 * @Author: shenjilin-home
 * @Date: 2023-12-20 22:12:12
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-02 22:00:11
 * @Description: 
-->
## pnpm monorepo

笔记：
vite 构建是假定类型检查已经被你的IDE或构建过程处理了
1. tsconfig 主要写给IDE看到，为了让IDE能够实现类型检查，提示我们代码中的类型错误
2. Vite 不负责类型检查，并且推荐我们在构建过程中于另一个进程单独执行类型检查，那么 tsconfig 就应该提供给执行检查任务的编辑器 tsc。