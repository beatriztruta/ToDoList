import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Fazer uma chamada GET para buscar as tarefas do seu back-end
    axios.get('/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddTask = () => {
    // Fazer uma chamada POST para adicionar uma nova tarefa
    axios.post('/api/tasks', { title: newTask })
      .then((response) => {
        setNewTask('');
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}

export default TaskList;
