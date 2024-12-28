import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Function to handle adding a task
  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);  // Add the new task to the list
      setTask('');  // Clear the input field after adding the task
    }
  };

  // Function to handle removing a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);  // Remove the task from the list
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        
        {/* Input field for adding tasks */}
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>

        {/* Display the list of tasks */}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
