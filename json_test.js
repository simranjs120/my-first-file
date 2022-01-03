var http = require('http');
var data="This is a simple string data";
var data1=[
    {id:1,text:"Hi"},
    {id:2,text:"Hi"}
        ]
http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'application/json'});
res.write(JSON.stringify(data))
res.write(JSON.stringify(data1))
}).listen(4000)