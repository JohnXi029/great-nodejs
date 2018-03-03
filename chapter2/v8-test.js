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

//  JSON
// var obj = JSON.parse('{"name": "tom", "age": 18}');
// console.log(obj.name);
// console.log(obj.age);


// function#bind
// .bind允许改变对this的引用
// function a() {
//   console.log(this.hello == 'world'); // true
// }
// var b = a.bind({hello: 'world'});
// b();


// function # name
// 始终推荐对函数进行命名，否则出错的时候可能找不到
// var a = function woot() {};
// console.log(a.name == 'woot');  // true


// _proto_ 继承
function Animal() {}
function Ferret() {}
Ferret.prototype._proto_ = Animal.prototype;


// 存取器





































