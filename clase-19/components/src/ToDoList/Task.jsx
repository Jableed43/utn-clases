/* eslint-disable react/prop-types */
// Task.js

// Task.js

import React, { useState } from 'react';

const Task = ({ title, description, deadline }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    <label htmlFor="check">Realizada</label>
      <input type="checkbox" name='check' checked={completed} onChange={toggleCompleted} aria-label='marcar como leido' />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Fecha Limite: {deadline}</p>
    </div>
  );
};

export default Task;
