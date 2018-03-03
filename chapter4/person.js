'use strict';

// 这里要注意： Person后面没有括号！！！！！！！！
module.exports = Person;

function Person (name) {
  this.name = name;
  // console.log(this);
}

Person.prototype.talk = function () {
  console.log('我的名字是：' + this.name);
};