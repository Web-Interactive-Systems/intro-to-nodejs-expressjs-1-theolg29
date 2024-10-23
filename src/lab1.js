const http = require("http");
const fs = require("fs");
const path = require('path');

/**
 Todo Complete this app to serve the content inside `static` folder
 
 - Create an http server that serves the app in: `static/html/index.html`
 - The app shows navigation pages that should be created and placed inside `static/html`
 - If an url is not found the app should serve "Page not found"

 -- Hint, it possible to read a file using `readFileSync` of fs module and serve it to the client
 */

const INDEX_URL = '/static/html/index.html';
const CSS_URL = '/static/css/styles.css';
const JS_URL =  '/static/js/app.js'

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname , INDEX_URL);
    const content = fs.readFileSync(filePath);
    res.end(content);
  }

  else if (req.url === "/css/styles.css") {
    res.writeHead(200, {'Content-Type': 'text/css'});
    const filePath = path.join(__dirname , CSS_URL);
    const content = fs.readFileSync(filePath);
    res.end(content);
  }

  else if (req.url === "/js/app.js") {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    const filePath = path.join(__dirname , JS_URL);
    const content = fs.readFileSync(filePath);
    res.end(content);
  }
  else {
    res.writeHead(404);
    res.end();
  }



});

server.listen(3000, () => {
  console.log('Server running at <http://localhost:3000/>');
  });