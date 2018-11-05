const express = require('express');
const router = express.Router();
const axios = require('axios');
const Message = require('../models/Message')
const Credit = require('../models/Credit')

/* Post que envia los mensajes. Al enviarse las propiedades "sent" y "confirmed"
pasan a ser verdaderas */
router.post('/messages', (req, res, next) => {
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
                .then(amount - 1)
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
// falta añadir la parte donde al enviar un mensaje resta crédito
// la terminaré hoy.


//quite las validaciones para añadirlas con el middleware de validator de express
//pero todavía no lo terminé.

module.exports = router;