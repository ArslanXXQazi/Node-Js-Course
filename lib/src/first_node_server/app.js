

const http = require("http");
 
const server = http.createServer(function(req , res){
  console.log(req.url, req.method,req.headers);


  res.setHeader("Content-Type" , "text/html");
  res.writ')

});

const  port = 3001;

server.listen(port,()=>{
  console.log("Server running at http://localhost:"+port);

});
