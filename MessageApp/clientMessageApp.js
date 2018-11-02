import axios from 'axios';

class MessageApp {
    constructor() {
        this.service = axios.create({
            baseURL: `http://messageapp:9001`
        })
    }

sendMessages = (destination, body) => {
    return this.service.post('/messages', {destination, body})
    .then(response => response.data)
    .catch(error => error.response)
}

getMessages = () => {
    return this.service.get('/messages')
    .then(response => response.data)
    .catch(error => error.response)
  }
}

export default MessageApp