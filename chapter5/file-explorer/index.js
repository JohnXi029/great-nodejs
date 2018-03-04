'use strict';

var fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
  
  console.log('');
  
  if (!files.length) {
    return console.log('No files to show!');
  }
  
  console.log('Select which file or directory you want to see:\n');
  
  function file(i) {
    
    var filename = files[i];
    
    fs.stat(__dirname + '/' + filename, (err, stat) => {
      
      if (stat.isDirectory()) {
        console.log('    ' + i + ' ' + filename + '/');
      } else {
        console.log('    ' + i + ' ' + filename);
      }
      
      i++;
      
      if (i == files.length) {
        console.log('');
        process.stdout.write('Enter you choice:');
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
      } else {
        file(i);
      }
      
    });
  }
  
  file(0);
});
