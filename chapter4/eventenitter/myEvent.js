'use strict';
// require('events');
var EventEmitter = require('events').EventEmitter;

console.log(EventEmitter.prototype);

var MyClass = function() {};
MyClass.prototype.__proto__ = EventEmitter.prototype;


var a = new MyClass;

// console.log(a instanceof EventEmitter);

a.on('event', () => {
  console.log('Got it!');
});

a.emit('event');