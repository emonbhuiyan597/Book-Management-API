const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


app.use(express.json());


app.use('/', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
