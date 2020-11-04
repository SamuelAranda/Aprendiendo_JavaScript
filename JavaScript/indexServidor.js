const http = require("http");

http.createServer(function(req, res){
    res.writeHead(404, {'Content-type': 'text/html'});
    res.write('<h2>Holo caracolo</h2>');
    res.end();
}).listen(28028);