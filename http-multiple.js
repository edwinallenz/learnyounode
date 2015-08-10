var http = require('http');
var bl = require('bl');

function recursiveSync(count){
  http.get(process.argv[count],function (response){
    response.pipe(bl(function (err,data){
      if(err)
      return callback(err);
    console.log(data.toString()); 
    if(++count <= 4)
      recursiveSync(count);
    }));
  });
}
recursiveSync(2);

