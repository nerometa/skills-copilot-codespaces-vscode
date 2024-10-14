// Create web server
// Create a web server that listens to the port 3000 and returns the comments.json file when the user hits the endpoint /comments.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Run the following command in the terminal to start the server:
// node comments.js
// Open the browser and go to the following URL to see the comments.json file:
// http://localhost:3000/comments
// The server will return the contents of the comments.json file in JSON format.