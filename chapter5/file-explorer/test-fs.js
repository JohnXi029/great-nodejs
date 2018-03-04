'use strict';

var fs = require('fs');

// 读取文件：


// 同步方法
console.log(fs.readdirSync(__dirname));

// 异步方法
function async (err, files) {
  console.log(files);
}
fs.readdir('.', async);



