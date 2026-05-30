const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  name: String,
  riddles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Riddle' }],
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Competition', competitionSchema);
