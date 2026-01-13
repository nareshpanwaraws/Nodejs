const express = require('express');
const app = express();
const path = require('path');
app.get('/', (req,res) => (
  res.sendFile(path.join(...dirnname+'index.html));
));

app.get('/about', (req,res) => (
  res.sendFile(path.join(_dirname+'/about.html'));
));
app.listen(8081, () => (
    console.log('Listening on port 8081');
));
