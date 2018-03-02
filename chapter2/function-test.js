'use strict';
/*
 * javascript 函数
 */

// var a = function() {}
// console.log(a);  // [Function: a]


// function#call & function#apply
// call和apply可以改变this的值：call接受参数列表；apply接受一个参数数组

// function a () {
//   console.log(this.a == 'b'); // true
// }
// a.call({a: 'b'});

// function a (b, c) {
//   console.log(b == 'first'); // true
//   console.log(c == 'second'); // true
// }
// a.call({a: 'b'}, 'first', 'second');

// function a (b, c) {
//   console.log(b == 'first'); // true
//   console.log(c == 'second'); // true
// }
// a.apply({a: 'b'}, ['first', 'second']);


// 参数数量
// var a = function(a, b, c) {
//
// }
// console.log(a.length);  // 3



//  闭包
// var a = 5;
// function woot() {
//   console.log(a);  // undefined
//   var a = 6;
//   function test() {
//     console.log(a == 6);
//   }
//
//  test();
// }
// woot();


// 自执行: 仅定义一个新的作用域
var a = 3;
(function () {
  var a = 5;
})();
console.log(a==3);
