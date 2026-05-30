const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const riddlesRoutes = require('./routes/riddles');
const usersRoutes = require('./routes/users');
const competitionRoutes = require('./routes/competition');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/riddleCompetition', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/riddles', riddlesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/competition', competitionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
