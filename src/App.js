import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <div className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            toggleComplete={() => toggleComplete(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
