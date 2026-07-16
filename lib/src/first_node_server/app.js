

const http = require("http");
 
const server = http.createServer(function(req , res){
  console.log(req);
});

const  port = 3000;

server.listen(3000);