var http=require('http');
http.createServer(function(req,res){
    res.write("Hello Server !");
    res.end();
}).listen(2000);

var a=10;
console.log(a);

// A Simple Function that returns the sum of a and b

function sum(a,b){
    return a+b;   
}
console.log(sum(10,20));
