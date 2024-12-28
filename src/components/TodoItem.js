import React from "react";

function TodoItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={toggleComplete}>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TodoItem;
