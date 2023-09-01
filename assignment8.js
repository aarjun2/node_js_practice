const express = require('express');
const bodyParser = require('body-parser');
const { sum } = require('./math');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/calculate-sum', (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Input should be an array of numbers' });
  }

  const result = sum(numbers);

  return res.status(200).json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;