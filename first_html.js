var http= require('http')
var heading = "<h1>Indejeet Kaur</h1>";
//  var inn='<input type="text" />';
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'}); 
res.write(heading);
// res.write(inn);
res.end();
}).listen(4000)