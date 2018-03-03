'use strict';

// buffer

var fs = require('fs');

var mybuffer = new Buffer();
console.log(mybuffer.length);

// fs.wirteFile('logo.png', mybuffer);
fs.appendFileSync('logo.png', mybuffer);