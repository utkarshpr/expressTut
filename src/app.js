const express = require('express');
const app = express();
require('./db/conn');
const MenRanking = require('./models/mens');
const Port = process.env.PORT | 8000;
const router = require('../src/router/men');
//
app.use(express.json());
//routere expreess

app.use(router);

app.listen(Port, () => {
  console.log(`Listining.....${Port}`);
});
