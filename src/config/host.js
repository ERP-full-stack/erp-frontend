/**
 * config api接口输出
 * created by lqy 1018/11/19
 * @type {string}
 */
let host = '';
const evn = process.env.NODE_ENV;

if (evn === 'development') {
  host = '';
} else if (evn === 'production') {
  host = '生产环境';
} else {
  host = '';
}

export {
  host,
  evn,
};
