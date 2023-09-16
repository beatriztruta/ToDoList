const mongoose = require('mongoose');

// Defina o esquema do usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove espaços em branco no início e no final
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  age: {
    type: Number,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Garante que o email seja único
    trim: true,
    lowercase: true, // Armazena o email em minúsculas
  },
  password: {
    type: String,
    required: true,
    // Você pode adicionar validações e lógica de criptografia aqui
  },
});

// Crie um modelo User usando o esquema definido
const User = mongoose.model('User', userSchema);

module.exports = User;
