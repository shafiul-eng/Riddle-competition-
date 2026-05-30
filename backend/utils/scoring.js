function calculateScore(riddle, answer) {
  return riddle.answer.toLowerCase() === answer.toLowerCase() ? riddle.difficulty * 10 : 0;
}
module.exports = { calculateScore };
