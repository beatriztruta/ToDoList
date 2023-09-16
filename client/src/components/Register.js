import React, { useState } from 'react';

function Register() {
  // Estados para controlar os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Função para atualizar os estados quando os campos são preenchidos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar os dados do registro para o servidor (você precisa implementar isso)
    console.log('Dados de registro:', formData);

    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
