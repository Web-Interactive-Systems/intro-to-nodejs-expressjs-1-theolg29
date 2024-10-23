/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create a server that serves a static folder: `public`
 - If an url is not found, the server should serve 'Page not found'
 */

 
const express = require('express');
const app = express();

const staticMiddleware = express.static('public');
console.log(staticMiddleware);
app.use(staticMiddleware);

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000);