'use strict';

var EventEmitter = require('events').EventEmitter;
// console.log(EventEmitter);
var a = new EventEmitter();

a.on('event', () => {
  console.log('event called!');
});

a.emit('event');