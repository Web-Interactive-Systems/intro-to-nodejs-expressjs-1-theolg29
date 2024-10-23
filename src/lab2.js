/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.post('/', (req, res) => {
    console.log(body);
});

app.put('/put', (req, res) => {
    res.send('Put');
});

app.delete('/delete', (req, res) => {
    res.send('Delete');
});

app.all('/all', (req, res) => {
    res.send('All');
});

app.use((req, res) => {
    res.send('Use');
});
app.use(express.json());  

app.listen(3000);