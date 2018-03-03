'use strict';
/*
 * Node.js 阻塞实例
 */
 
var start = Date.now();

setTimeout(() => {
  console.log(Date.now() - start);
  for (var i = 0; i < 10000000000; i++) {}
}, 1000);

setTimeout(() => {
  console.log(Date.now() - start);
}, 2000);