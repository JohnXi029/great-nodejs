'use strict';
/*
 * javascript 类
 */

// javascript中的类，用过function实现
// prototype的用法
// this的用法
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function (food) {
  console.log("Eat " + food + "!" );
};

Animal.prototype.getName = function () {
  return this.name;
};

// var animal = new Animal('Tom');
// animal.eat('rice');
// console.log(animal.getName());


// 继承
function Ferret() {};
// 实现继承
Ferret.prototype = new Animal();
// 定义属性
Ferret.prototype.type = 'domestic';
// 重写父类方法
Ferret.prototype.eat = function(food) {
  // !!!!! 在这里调用父类方法  super();
  Animal.prototype.eat.call(this, food);
  // 私有方法
  console.log("what?" + food);
}

var ferret = new Ferret();
console.log(ferret.getName());
ferret.eat('饼干');
