


const fs = require('fs');
const http = require('http');

const filePath = '/app/data/log.txt';

const server = http.createServer((req, res) => {
    const log = `Visited at ${new Date()}\n`;

    fs.appendFileSync(filePath, log);

    res.end("Hello! Data is being stored in Docker volume 🚀");
});

server.listen(3000, '0.0.0.0', () => {
    console.log("Server running on port 3000");
});
