// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('../routes/taskRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000; 

// Configurações do MongoDB
mongoose.connect('mongodb://localhost/my-todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error(err));

// Middleware para analisar o corpo das requisições em formato JSON
app.use(bodyParser.json());

// Rotas
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
