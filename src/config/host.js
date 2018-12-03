/**
 * config api接口输出
 * created by lqy 1018/11/19
 * @type {string}
 */

let host = '';

if (process.env.NODE_ENV === 'development') {
  host = 'http://localhost:3000';
} else if (process.env.NODE_ENV === 'production') {
  host = '生产环境';
} else {
  host = '';
}

export default {
  host,
};
