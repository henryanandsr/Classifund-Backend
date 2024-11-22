const express = require('express');
const app = express();
const port = 3000;
const ip = "127.0.0.1";

app.get('/', (req, res) => {
  res.send('DUAR');
});

app.listen(port, ip, () => {
  console.log(`Classifund-Backend listening on http://${ip}:${port}`);
});