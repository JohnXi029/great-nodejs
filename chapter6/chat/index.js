/*
 * 一个简单的聊天室程序
 */
 
var net = require('net');

// 连接数
var count = 0;

// 创建服务
var server = net.createServer((conn) => {
  // handle connection
  console.log('\033[90m  new connection! \033[39m');
  
  conn.on('data', (data) => {
    console.log("Data: " + data);
  });
  
  conn.write(
      '\n > Welcome to node-chat!'
    + '\n > ' + count + ' other people are connected at this time.'
    + '\n > please write your name and press enter:'
  );
  count++;
  
  // conn关闭事件
  /*
  有两个和连接终止有关的事件： close 和 end
  区别是，当连接发生错误时，end事件不会触发，而close事件总会触发
  可以理解为：end是“正常结束”
  */
  conn.on('close', () => {
    console.log('\033[90m  connection closed! \033[39m');
    count--;
  });
});

// 监听
server.listen(3000, () => {
  console.log('\033[96m  server listening on *:3000 \033[39m');
});