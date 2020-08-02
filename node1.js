/* Node CHAPTER 1
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'type/html' });
    res.end('Hello message');
}).listen(9000);
// var request = require("request");
//         request("http://www.google.com",function(error,response,body)
//         {
//                 console.log(body);
//         });
NODE CHAPTER 5      */
// var express = require('express');
// var app = express();
// app.get('/${am}', (req, res) => {
//     var c = req.params.name;
//     res.send('Hello ' + c) 
// })
// app.listen(1010);

var express = require('express');
var app = express();
app.get('/Node', (function (req, res) {
        res.send("Tutorial on Node");
    }))
 app.post('/angular',(function (req, res)
{
    res.send("Tutorial on Angular");
}))
app.put('/guru',(function (req, res) {
    res.send('Welcome to Guru99 Tutorials');
}))
app.listen(7070);