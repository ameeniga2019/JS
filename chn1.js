// var filesystem = require('fs');
// var inputFile = '/Users/ameeniga/Documents/JSPrac/inputtext.txt';
// var outputFile = '/Users/ameeniga/Documents/JSPrac/outputtext.txt';
// var data = filesystem.readFileSync(inputFile);
// filesystem.writeFileSync(outputFile, 'hi amrutha')
var http = require('http');
var inputFile = '/Users/ameeniga/Documents/JSPrac/inputtext.txt';
var fs = require('fs');
http.createServer((req, res) => {
    fs.readFile(inputFile, (error, data) => {
        try {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        }
        catch (error){ console.log(error);}
         finally {console.log('finally')}
    })
}).listen(9090)
console.warn('warning')