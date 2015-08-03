var fs = require('fs');
var Path = require('path');

var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, function(error,files){
  if(!error){
    files.forEach(function(file){
     if(Path.extname(file)=== '.'+ extension)
      console.log(file);
    });
 }
});
