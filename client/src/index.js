import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importe o componente raiz do aplicativo (geralmente App.js)
import './index.css'; // Opcional: importe folhas de estilo globais ou de terceiros, se necessário

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
