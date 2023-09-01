const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.model('Todo', todoSchema);

// CREATE a new todo (POST)
app.post('/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// READ all todos (GET)
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// READ a todo by ID (GET)
app.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send('Todo not found');
    }
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE a todo by ID (PUT)
app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.send(updatedTodo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE a todo by ID (DELETE)
app.delete('/todos/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.send(deletedTodo);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Todos Microservice is running on port ${port}`);
});