var fs = require('fs');
var Path = require('path');

module.exports = function(path, extension, callback){
 var filesArray = new Array();
 var count = 0;
 fs.readdir(path, function(error,files){
   if(error)
    callback(error);
   else{
    files.forEach(function(file){
     if(Path.extname(file) === '.'+ extension){
      filesArray[count]=file;
      count++;
     }
    });
    callback(null,filesArray);
   }
  }); 
};

