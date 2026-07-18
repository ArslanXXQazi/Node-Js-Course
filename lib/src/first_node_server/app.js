

const http = require("http");
 
const server = http.createServer(function(req , res){
  console.log(req);
});

const  port = 30021;

server.listen(port,()=>{
  console.log("Server running at http://localhost:"+port);
  process.exit();
});
