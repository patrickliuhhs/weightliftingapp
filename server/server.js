const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const writeLocation = `${__dirname}/db.json`;

console.log('server loaded');

app.get('/api/workouts', (req,res) => {
  let marketList = JSON.parse(fs.readFileSync(writeLocation));
  console.log('marketList request success');
  return res.status(200).json(marketList);
})

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req,res) => {
  console.log('server base get');
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);