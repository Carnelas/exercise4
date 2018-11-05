const express = require('express');
const router = express.Router();
const Credit = require('../models/Credit')

//este post subirá el crédito o actualizará el crédito existente
router.post('/credit', (req, res, next) => {
  let newAmount = req.body.amount
  Credit.findOneAndUpdate({
    $inc: {
      "amount": newAmount
    }
  })
    .then(() => {
      res.status(200).send('amount updated');
    })
    .catch((err) => {
      res.status(500).send(err + ' try again')
    })
})

// get que devuelve el crédito actual
router.get('/credit', (req, res, next) => {
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


module.exports = router;