const express = require('express');
const router = express.Router();
const axios = require('axios');
const Credit = require('../models/Credit')

router.post('/', (req, res, next) => {
    let { amount } = req.body
    axios.post('http://messageapp:3000/credit', { amount })
        .then(() => {
            Credit({
                amount
            })
                .save()
                .then(credit => credit)
                .catch(err => err)
        })
        .then(() => {
            res.status(200)
                .send('succesful');
        })
        .catch((e) => {
            res.status(500)
                .send(e);
        })
})

module.exports = router;