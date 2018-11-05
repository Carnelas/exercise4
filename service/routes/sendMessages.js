const express = require('express');
const router = express.Router();
const axios = require('axios');
const Message = require('../models/Message')
const Credit = require('../models/Credit')

/* Post que envia los mensajes. Al enviarse las propiedades "sent" y "confirmed"
pasan a ser verdaderas.
Antes de enviarse el mensaje se comprueba si hay crédito disponible.
*/
router.post('/', (req, res, next) => {
    Credit.find()
    if (amount <= 0) {
        send("no credit enough")
    }
    else {
        let { destination, body } = req.body
        axios.post('http://messageapp:3000/message', { destination, body })
            .then(() => {
                new Message({
                    destination,
                    body,
                    sent: true,
                    confirmed: true
                })
                    .then(amount - 1)
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
    }
})


//quite las validaciones para añadirlas con el middleware de validator de express
//pero todavía no lo terminé.

module.exports = router;