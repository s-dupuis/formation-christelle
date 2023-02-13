const Schemas = {};
var mongoose = require('mongoose');

Schemas.userSessions = require('./services/userSession/schema.js');
mongoose.model('UserSessions', Schemas.userSessions);

/*
Schemas.rawOffers = require('./schemas/rawOffers');
mongoose.model('RawOffers', Schemas.rawOffers);

Schemas.rawOfferGarantyItems = require('./schemas/rawOfferGarantyItems');
mongoose.model('RawOfferGarantyItems', Schemas.rawOfferGarantyItems);

Schemas.rawOfferNoteItems = require('./schemas/rawOfferNoteItems');
mongoose.model('RawOfferNoteItems', Schemas.rawOfferNoteItems);

Schemas.teams = require('./lib/schemas/teams');
mongoose.model('Teams', Schemas.teams);

Schemas.actions = require('./schemas/actions');
mongoose.model('Actions', Schemas.actions);

Schemas.teamInvitations = require('./lib/schemas/teamInvitations');
mongoose.model('TeamInvitations', Schemas.teamInvitations);
*/

Schemas.exchanges = require('./services/exchanges/schema.js');
mongoose.model('Exchanges', Schemas.exchanges);

module.exports = Schemas;
