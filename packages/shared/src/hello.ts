/*
 * @Author: shenjilin-home
 * @Date: 2023-12-24 16:47:59
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2023-12-24 16:56:56
 * @Description: 
 */
// packages/shared/src/hello.ts
export function hello(to: string = 'World') {
  const txt = `Hello ${to}!`;
  alert(txt);
  return txt;
}
