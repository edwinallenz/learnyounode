var Fs = require('fs');
var file = process.argv[2];

content = Fs.readFileSync(file);
stringContent =  content.toString();
var res = stringContent.split("\n");
console.log(res.length-1);
