const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const Credit = require('./models/Credit');

let connectRetry = function () {
  return mongoose.connect('mongodb://mongodb:27017/messages', { useNewUrlParser: true }, function (err) {
    if (err) {
      console.error('Error connecting to mongo - retrying in 5 seconds', err);
      setTimeout(connectRetry, 5000);
    } else {
      Credit.find();
      amount = 100; 
      console.log("connected to Mongo!!")
    }
  });
};
connectRetry();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middlewares

const sendMessages = require('./routes/sendMessages');
const getMessages = require('./routes/getMessages');
const sendCredit = require('./routes/sendCredit')
app.use('/messages', sendMessages);
app.use('/messages', getMessages);
app.use('/credit', sendCredit);


app.listen(9001, () => {
  console.log('listen on port 9001');
})

