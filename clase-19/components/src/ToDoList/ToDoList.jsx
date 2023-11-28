/* eslint-disable react/prop-types */
// TodoList.js

// TodoList.js

import React from 'react';
import Task from './Task';

const TodoList = ({ tasks }) => (
  <div>
    {tasks.map((task, index) => (
      <Task key={index} title={task.title} description={task.description} deadline={task.deadline} />
    ))}
  </div>
);

export default TodoList;
