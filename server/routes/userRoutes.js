const express = require('express');
const router = express.Router();

// Rota para registro de usuário
router.post('/register', (req, res) => {
 
  // Após o registro bem-sucedido, você pode retornar uma resposta, por exemplo:
  res.status(201).json({ message: 'Registro bem-sucedido' });
});

// Rota para login de usuário
router.post('/login', (req, res) => {
  

  // Após a autenticação bem-sucedida, você pode retornar uma resposta, por exemplo:
  res.json({ message: 'Login bem-sucedido' });
});

// Rota para acessar o perfil do usuário (requer autenticação)
router.get('/profile', (req, res) => {
 
   res.json({ name: 'Nome do Usuário', email: 'usuario@email.com' });
});

module.exports = router;
