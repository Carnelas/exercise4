const express = require('express');
const router = express.Router();
const axios = require('axios');
const Message = require('../models/Message')

 /* Post que envia los mensajes. Al enviarse las propiedades "sent" y "confirmed"
pasan a ser verdaderas */
    router.post('/', (req, res, next) => {
        let { destination, body } = req.body
        axios.post('http://messageapp:3000/message', { destination, body })
            .then(() => {
                new Message({
                    destination,
                    body,
                    sent: true,
                    confirmed: true
                })
                    .save()
                    .then(message => message)
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