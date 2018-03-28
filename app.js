const express = require('express');
const app = express;

const books = require('./routes/books');
var transactions = require('./routes/transactions');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
