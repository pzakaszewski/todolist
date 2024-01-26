import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Aplikacja to-do</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? addTask() : null}
      />
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleComplete(task.id)} aria-label="Zakończ zadanie">✅</button>
            <button onClick={() => deleteTask(task.id)} aria-label="Usuń zadanie">❌</button>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
