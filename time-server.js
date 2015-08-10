var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket){
  date = new Date();
  console.log('connection');
  socket.on('end',function(){
    console.log('discon');
  });
  socket.write(strftime('%F %R') + '\r\n', function(){
    socket.end(); 
  }); 
});
server.listen(process.argv[2], function(){
  console.log('server started');
});
