const express = require('express');
const Riddle = require('../models/Riddle');
const router = express.Router();

router.get('/', async (req, res) => {
  const riddles = await Riddle.find();
  res.json(riddles);
});

router.post('/', async (req, res) => {
  const riddle = new Riddle(req.body);
  await riddle.save();
  res.json(riddle);
});

module.exports = router;
