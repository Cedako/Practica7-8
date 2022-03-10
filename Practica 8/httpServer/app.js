var http = require('http');
// Tras instalar http a través de node, ahora se puede inicializar un servidor local
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');
// El servidor atenderá al puerto 1337 , con la dirección ip 127.0.0.1 y responderá la llamada con "Hello world"