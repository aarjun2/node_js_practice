const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(express.json());
app.post('/todos', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3000/todos', req.body);
    res.status(201).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/todos');
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Request Handling Microservice is running on port ${port}`);
});