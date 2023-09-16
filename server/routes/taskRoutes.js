const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Importe o modelo de tarefa

// Rota para buscar todas as tarefas
router.get('/', (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Rota para criar uma nova tarefa
router.post('/', (req, res) => {
  const { title, description } = req.body;

  const newTask = new Task({
    title,
    description,
  });

  newTask
    .save()
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Outras rotas para atualizar, excluir ou realizar outras operações em tarefas

module.exports = router;
