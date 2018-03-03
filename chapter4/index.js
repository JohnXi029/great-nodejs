'use strict';

var a = require('./module_a');
require('./module_b');

// Person
var Person = require('./Person');

console.log(a.name);
console.log(a.data);
console.log(a.getPrivate());

console.log("====================");

// 
var john = new Person('john');
john.talk();