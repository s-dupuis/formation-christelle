const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const exchanges = new Schema({
  dates: {
    sent: { type: Date }, // quand le message a été enristré
    sentToBG: { type: Date } // quand le message a été envoyé au gestionnaire
  },
  username: { type: String, index: { unique: true } },
  subject: { type: String },
  status: { type: String },
  messageId: { type: String }
}, {
  toObject: {
    virtuals: true,
    getters: true
  },
  toJSON: {
    virtuals: true,
    getters: true
  }
});

exchanges.plugin(mongoosePaginate);

module.exports = exchanges;
