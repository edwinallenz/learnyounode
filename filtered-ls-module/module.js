var fs = require('fs');
var Path = require('path');

module.exports = function(path, extension, callback){
 var filesArray = new Array();
 var count = 0;

 fs.readdir(path, function(error,files){
   if(error)
    callback(error);
   else{
     files = files.filter(function(file){
        return Path.extname(file) === '.' + extension;
     });
   callback(null,files);
   }
  }); 
};

