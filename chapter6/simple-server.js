/**
 * 一个简单的服务器
 */
require('http').createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('<h1>Hello Moto!</h1>');
}).listen(3000);