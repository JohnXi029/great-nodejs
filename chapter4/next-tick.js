'use strict';


// process.nextTick();
// process.nextTick 可以将一个函数的执行时间规划到下一个事件循环中：
// 类似的还有setImmediate

console.log(1);

process.nextTick(() => {
  console.log(3);
});

console.log(2);