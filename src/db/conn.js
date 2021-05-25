const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/men100m', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB....');
  })
  .catch((e) => {
    console.log('Not connected to DB');
  });
