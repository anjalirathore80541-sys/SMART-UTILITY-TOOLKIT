const http = require('http');
const logger = require('./modules/logger');

const PORT = 3001; 

const server = http.createServer((req, res) => {
  logger(`${req.method} ${req.url}`);

  // GET Routes
  if (req.method === 'GET') {

    if (req.url === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });

      return res.end('Welcome to Node Server');
    }

    if (req.url === '/about') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });

      return res.end('About Page');
    }

    if (req.url === '/contact') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });

      return res.end('Contact Page');
    }

    if (req.url === '/api/status') {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      return res.end(JSON.stringify({
        status: 'success',
        message: 'Server is running'
      }));
    }
  }

  // POST Route
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        message: 'POST data received',
        data: body
      }));
    });

    return;
  }

  // Invalid Route
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });

  res.end('404 - Page Not Found');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});