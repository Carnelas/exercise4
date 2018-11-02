const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  destination: {
    type: String,
    required: [true, 'Need destination'],
    minlength: 2,
    maxlength: 50
  },
  body: {
    type: String,
    required: [true, 'Need content'],
    minlength: 2,
    maxlength: 240
  },
  sent: {
    type: Boolean,
    required: [true, 'status required']
  },
  confirmed: {
    type: Boolean,
    default: false
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;