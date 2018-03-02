'use strict';
/*
 * javascript数据类型
 */

// 通过直观方式定义基本变量，避免使用new
// var a = 'woot';
// var b = new String('woot');
// console.log(a + b);  // wootwoot
// console.log(typeof a);  // String
// console.log(typeof b);  // object
// console.log(a instanceof String);  // false
// console.log(b instanceof String);  // true
// console.log(a.substr == b.substr);  // true
// console.log(a == b); // true
// console.log(a === b);  // false


// 在条件表达式中，一些特定的值会被判定为false：null，undefined，'', 0
// var a = null, b, c = '', d = 0;
// console.log(a == false);  // false
// if (!a) {
//   console.log("a!");  // print!
// }
// console.log(b == false);  // false
// if (!b) {
//   console.log("b!");  // print!
// }
// console.log(c == false);  // true
// console.log(d == false);  // true
//
// console.log(typeof null == 'object'); // true
// console.log(typeof [] == 'object'); // true
