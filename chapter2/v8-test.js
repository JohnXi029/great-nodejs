'use strict';
/*
 * javascript v8引擎的一些特性
 */

// object#keys
// var a = {a: 'b', c: 'd'};
// for (var i in a) {
// console.log(i);
// console.log(a[i]);
// // hasOwnProperty()
// console.log(a.hasOwnProperty(i));  // true
// }
// console.log(Object.keys(a));


// array#isarray
// console.log(Array.isArray(new Array));  // true
// console.log(Array.isArray([]));  // true
// console.log(Array.isArray(null));  // false
// console.log(Array.isArray(arguments)); // false

// 数组方法
// [1, 2, 3].forEach((v) => {
//   console.log(v);
// });
//
// [1, 2, 3].forEach((v) => {
//   return v < 3;
// });  // 返回 [1, 2]
//
// // 改变数组的值
// [1, 2, 3].forEach((v) => {
//   return v*2;
// });

// 字符串方法
// console.log('   hello   '.trim());
