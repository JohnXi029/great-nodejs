'use strict';
/*
 * javascript v8引擎的一些特性
 */

// object#keys
var a = {a: 'b', c: 'd'};
for (var i in a) {
console.log(i);
console.log(a[i]);
// hasOwnProperty()
console.log(a.hasOwnProperty(i));  // true
}

console.log(Object.keys(a));
