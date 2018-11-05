class Queue {
//esta clase prepara la cola
    constructor() {
      this.locked = false
      this.queue = [];
    }
  
    checkQueue() {
      console.log(this.queue.length,"before")
      if (!this.locked && this.queue.length > 0) {
        console.log(this.queue.length,"middle")
        let f = this.queue.shift();
        f();
      }
      console.log(this.queue.length,"end")
    }
  
  }
  
  module.exports = new Queue();