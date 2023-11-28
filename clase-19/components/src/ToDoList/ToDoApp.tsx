// TodoApp.js

import React, { useState } from "react";
import TodoList from "./ToDoList.jsx";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const addTask = () => {
    if (
      newTask.title !== "" &&
      newTask.description !== "" &&
      newTask.deadline !== ""
    ) {
      setTasks([...tasks, { ...newTask, completed: false }]);
      setNewTask({
        title: "",
        description: "",
        deadline: "",
      });
    }
  };

  return (
    <div>
      <h2>Todo App</h2>
      <label>Title:</label>
      <input
        type="text"
        value={newTask.title}
        onChange={e => setNewTask({ ...newTask, title: e.target.value })}
      />

      <label>Description:</label>
      <input
        type="text"
        value={newTask.description}
        onChange={e => setNewTask({ ...newTask, description: e.target.value })}
      />

      <label>Fecha limite:</label>
      <input
        type="date"
        value={newTask.deadline}
        onChange={e => setNewTask({ ...newTask, deadline: e.target.value })}
      />

      <button onClick={addTask}>Add Task</button>

      <TodoList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
