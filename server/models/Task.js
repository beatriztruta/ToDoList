const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Campo obrigatório
  },
  description: String, // Campo opcional
  completed: {
    type: Boolean,
    default: false, // Valor padrão é falso (tarefa não concluída)
  },
  createdAt: {
    type: Date,
    default: Date.now, // Data de criação automática
  },
  // Outros campos, se necessário
});

module.exports = mongoose.model('Task', taskSchema);
