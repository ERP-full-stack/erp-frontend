/**
 * config api接口输出
 * created by lqy 1018/11/19
 * @type {string}
 */
let host = 'https://api.douban.com/v2/movie/in_theaters';
const evn = process.env.NODE_ENV;

if (evn === 'development') {
  host = 'https://api.douban.com/v2/movie/in_theaters';
} else if (evn === 'production') {
  host = '生产环境';
} else {
  host = 'https://api.douban.com/v2/movie/in_theaters';
}

export {
  host,
  evn,
};
