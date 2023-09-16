import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fazer uma chamada à API para buscar os dados do perfil do usuário.
    axios.get('/api/user/profile')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      {userData ? (
        <div>
          <p>Nome: {userData.name}</p>
          <p>Gênero: {userData.gender}</p>
          <p>Idade: {userData.age}</p>
          <p>Email: {userData.email}</p>
          {/* Outras informações do perfil */}
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
    </div>
  );
}

export default UserProfile;
