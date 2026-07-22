

const http = require("http");
 
const server = http.createServer(function(req , res){
  console.log(req.url, ')

});

const  port = 3001;

server.listen(port,()=>{
  console.log("Server running at http://localhost:"+port);

});
