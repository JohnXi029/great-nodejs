"use strict";

// 展示参数
// // 前两个参数是node和文件
// console.log(process.argv);
// // 去掉前两个，只展示真正的参数
// console.log(process.argv.slice(2));


// 工作目录
// // 被执行的文件所有目录
// console.log(__dirname);
// // 程序运行时所在的工作目录(输入node命令时所在的目录)
// console.log(process.cwd());
// // 更改工作目录
// process.chdir('/');
// console.log(process.cwd());



// 环境变量
// console.log(process.env);



// NODE_ENV 相当于spring profile
// NODE_ENV="prod" node ....


// 退出
// console.error("An error happened!");
// process.exit(0);



// 信号
// 要让程序终止，可以发送SIGKILL
// process.on('SIGKILL', () => {
//   console.log("终止客户端");
// });


// ANSI转义码
// console.log('姓名\v张三\v狗蛋');

























