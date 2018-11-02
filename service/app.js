const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

let connectRetry = function () {
  return mongoose.connect('mongodb://mongodb:27017/messages', { useNewUrlParser: true }, function (err) {
    if (err) {
      console.error('Error connecting to mongo - retrying in 5 seconds', err);
      setTimeout(connectRetry, 5000);
    } else {
      console.log("connected to Mongo!!")
    }
  });
};
connectRetry();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sendMessages = require('./routes/sendMessages')
const getMessages = require('./routes/getMessages');
app.use('/messages', sendMessages)
app.use('/messages', getMessages);

app.listen(9001, () => {
  console.log('listen on port 9001');
})

