var Fs = require('fs');
var file = process.argv[2];

Fs.readFile(file, function(error,content){
  if(!error){
    stringContent =  content.toString();
    var res = stringContent.split("\n");
    console.log(res.length-1);
  }
});

