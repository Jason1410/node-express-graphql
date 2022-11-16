const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turnSchema = new Schema({
  game_id: String,
  turn: Number,
  flip1: Number,
  flip2: Number
});

const Turn = mongoose.model('Turn', turnSchema);

module.exports = Turn;