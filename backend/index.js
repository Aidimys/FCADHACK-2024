const express = require('express');
const cors = require('cors');
const activityDate = require('./data/activity.json');

const app = express();
app.use(cors());

app.get('/activity', (req, res) => {
  res.json(activityDate);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('OK');
});
