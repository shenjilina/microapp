/*
 * @Author: shenjilin-home
 * @Date: 2024-01-10 21:51:27
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-10 21:51:32
 * @Description:
 */
export function isObjectLike(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
