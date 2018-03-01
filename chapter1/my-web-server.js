'use strict';
/*
 * 一个简单的服务器
 */
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<marquee>Smashing Node!</marquee>');
});

server.listen(8080);
