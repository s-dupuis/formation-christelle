const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

var userSessions = new Schema({
  sessionId: { type: String, index: { unique: true } },
  dates: {
    signIn: { type: Date }
  },
  user: {
    username: { type: String, index: { unique: true } },
    email: { type: String },
    clientSessionId: { type: String },
    partyIdCrypt: { type: String },
    networkInformation: {
      networkId: { type: String },
      eltNetworkId: { type: String }
    },
    role: { type: String },
    companyType: { type: String }
  }
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

module.exports = userSessions;
