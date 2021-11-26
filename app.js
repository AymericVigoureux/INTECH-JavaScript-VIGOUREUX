const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send back a response and end the connection
    res.write(index);
    res.end();
});


app.listen(8080, '127.0.0.1');
console.log('Node server running on port 8080');
console.log('Listening on http://localhost:8080/');

