var http = require('http');
var fs = require('fs');
var path = require('path')
var server = http.createServer((req, res) => {
    console.log('Requested resource' + req.url);
    if (req.url === '/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<a href='/reg' > Register me </a>")
    }
    else if (req.url ==='/reg')
    {
        var htmlFile = path.join(__dirname, 'reg.html');
        res.writeHead(200, {'Content-Type':'text/html'})
    }
    var readableStream = fs.createReadStream(htmlFile, { encoding: 'utf-8' });
    readableStream.pipe(response);

 else if (request.url === '/reg') {
    var formData = ""; request.on('data', (content) => {
        console.log(content.toString());
        formData += content.toString();
    }); response.writeHead(200, { 'Content-Type': 'text/plain' });
     request.on('end', function () { console.log('formData : ' + formData); response.end('formData' + formData); });
} else {
    console.log(`${request.url} Resource not available`); response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Resource not available');
} });
  })

server.listen(9000)