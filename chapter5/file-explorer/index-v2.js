// 'use strict';

/*
 * 重构
 * 1，创建快捷变量
 * 2. 过多的函数嵌套会让可读性变差，每步骤操作都预定义函数
 */
var fs = require('fs')
  , stdin = process.stdin
  , stdout = process.stdout;

// 用户选择的文件名称
var filename;
var stats = [];

fs.readdir(process.cwd(), (err, files) => {
  
  console.log('');
  
  if (!files.length) {
    return console.log('No files to show!');
  }
  
  // called for each file walked in the directory
  function file(i) {
    
    filename = files[i];
    
    fs.stat(__dirname + '/' + filename, (err, stat) => {
      
      stats[i] = stat;
      
      if (err) {
        console.log(err);
        return;
      }
      
      if (stat.isDirectory()) {
        console.log('\033[36m' + i + ' ' + filename + '/\033[39m');
      } else {
        console.log('\033[90m' + i + ' ' + filename + '\033[39m');
      }
      
      if (++i == files.length) {
        read();
      } else {
        file(i);
      }
    });
  }
  
  // 读取用户操作
  function read() {
    console.log('');
    stdout.write('\033[33m Enter your choice: \033[39m');
    stdin.resume();
    stdin.setEncoding('utf8');
    
    stdin.on('data', option);
  }
  
  // called wieh then option supplied by the user
  function option(data) {
    
    stdin.pause();
    
    // console.log("option " + data);
    // console.log("file " + files[Number(data)]);
    // console.log("filename " + filename);
    // console.log("dir " + stats[Number(data)].isDirectory());
    
    if (!files[Number(data)]) {
      
      stdout.write('\033[31m Enter your choice: \033[39m');
    } else if (!stats[Number(data)].isDirectory()) {  // 选中文件，读取
      
      fs.readFile(__dirname + '/' + files[Number(data)], 'utf8', (err, data) => {
        console.log('');
        console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
      });
    } else {  // 选中文件夹，继续遍历
      // console.log(__dirname + "/" + filename);
      fs.readdir(__dirname + "/" + files[Number(data)], (err, files) => {
        console.log('');
        console.log(' (' + files.length + ' files)');
        files.forEach((file) => {
          console.log('  - ' + file);
        });
        console.log('');
      });
    }
  }
  
  file(0);
  
  console.log('Select which file or directory you want to see:\n');
});
  
























