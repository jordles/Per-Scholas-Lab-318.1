/* -------------------------------------------------------------------------- */
/*                       NODEJS INSTALLATION AND BASICS                       */
/* -------------------------------------------------------------------------- */

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  
  const statusCode = [200, 201, 202, 205, 400, 404, 405, 418, 420, 444, 450, 500, 502, 509, 599][Math.floor(Math.random() * 15)];
  res.statusCode = statusCode;  
  res.setHeader('Content-Type', 'text/html');  
  res.write('Sending cats... for status code')
  res.write(`<h1>Status Code: ${statusCode}</h1>`);
  res.write(`<img src="https://http.cat/${statusCode}" alt="HTTP Cat for status ${statusCode}">`);
  res.write(`<h1 style="color: red">Refresh to see new status codes and new cats</h1>`);  
  res.write('<p>I wonder what else we can send...</p>');  
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})