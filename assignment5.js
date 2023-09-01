const http = require("http");
const fs = require("fs");
const url = require('url');
const querystring = require('querystring');

let formData = '';
http.createServer((req,res) => {
    const { pathname} = url.parse(req.url, true);
    if(pathname === '/submit' && req.method == "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write(body);
            res.end();

            formData = querystring.decode(body);
        });
    } else if (pathname === '/form' && req.method === 'GET') {
        fs.readFile('./form.html', (err,data) => {
            res.end(data);
        });
    }
    else if(pathname === '/querystring') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(JSON.stringify(formData));
        res.end();
    }
}).listen(3000);