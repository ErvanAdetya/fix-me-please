const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const app = express();

const books = require('./routes/books');
var transactions = require('./routes/transactions');

// mongoose.connect('mongodb://localhost/api-crud-mongoose', {useMongoClient: true},(err) => {
//   err ? console.log('Can\'t connect to database') : console.log('Database connected')
// });
mongoose.connect('mongodb://localhost:27017/flcode', {useMongoClient: true},(err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
