const express = require('express');
const router = express.Router();
const mainQueue = require('../extra/queue.js')

router.post('/', numberValidator, (req, res, next) => {
  let newAmount = req.body.amount
  mainQueue.queue.unshift(function () {
    mainQueue.locked = true
    Credit.findOneAndUpdate({
        $inc: {
          "amount": newAmount
        }
      }).then(resp => {
        mainQueue.locked = false
        mainQueue.checkQueue();
        res.status(200);
        res.send(`Credit increased by ${newAmount}`)
      })
      .catch(e => {
        mainQueue.locked = false
        mainQueue.checkQueue();
        res.status(500);
        res.send("Error in the DataBase")
      })
  })

  mainQueue.checkQueue();
})

router.get('/', (req, res, next) => {

  Credit.find()
    .then(resp => {
      res.status(200);
      res.send(resp)
    })
    .catch(e => {
      res.status(500);
      res.send("Error in the DataBase")
    })
})

function numberValidator(req, res, next) {
  let amount = req.body.amount

  if ((Number.isInteger(amount)) && (amount > 0)) {
    return next();
  } else {
    res.status(400)
    res.send('Amount should be an Integer Number bigger than 0')
  }
}
module.exports = router;