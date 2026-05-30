const mongoose = require('mongoose');

const riddleSchema = new mongoose.Schema({
  question: String,
  answer: String,
  difficulty: Number
});

module.exports = mongoose.model('Riddle', riddleSchema);
