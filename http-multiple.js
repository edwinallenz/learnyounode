var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function (response){
  response.pipe(bl(function (err,data){
    if(err)
      return console.log(err);
    data = data.toString(); 
    console.log(data);
  }));
});

http.get(process.argv[3],function (response){
  response.pipe(bl(function (err,data){
    if(err)
      return console.log(err);
    data = data.toString(); 
    console.log(data);
  }));
});


http.get(process.argv[4],function (response){
  response.pipe(bl(function (err,data){
    if(err)
      return console.log(err);
    data = data.toString(); 
    console.log(data);
  }));
});