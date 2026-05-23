const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, This is the Home Page');
    } else if (req.method === 'GET' && req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the About Page');
    } else if (req.method === 'GET' && req.url === '/form') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<form action="/submit" method="post">
    <input type="text" name="txtValue1" id="txtValue1"> <br><br>
    <input type="text" name="txtValue2" id="txtValue2"> <br><br>
    <input type="submit" value="Submit" name="btnSubmit">
</form>`);
    }else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk; 
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(body);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404: ទំព័រមិនត្រូវបានរកឃើញ');
    }
});

server.listen(3000, () => {
    console.log('Server កំពុងដំណើរការនៅ port 3000');
});