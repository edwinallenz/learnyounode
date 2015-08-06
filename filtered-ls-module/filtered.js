module = require ("./module");

var path = process.argv[2];
var extension = process.argv[3];

module(path, extension, function(error, files){
  files.forEach(function(file){
    console.log(file); 
  });
}); 
