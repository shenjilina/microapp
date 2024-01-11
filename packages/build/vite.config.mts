/*
 * @Author: shenjilin-home
 * @Date: 2024-01-05 22:27:46
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-11 23:13:39
 * @Description:
 */
import { generateConfig } from './build.config';

const options = generateConfig();
options.then((res) => {
  console.log(res);
});
export default options;
