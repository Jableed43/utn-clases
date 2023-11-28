import React, { useState } from 'react';

export const SimpleCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    switch (operation) {
      case 'sum':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div>
      <label>Number 1:</label>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />

      <label>Number 2:</label>
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />

      <button onClick={() => handleOperation('sum')}>Add</button>
      <button onClick={() => handleOperation('subtract')}>Subtract</button>
      <button onClick={() => handleOperation('multiply')}>Multiply</button>
      <button onClick={() => handleOperation('divide')}>Divide</button>

      <div>
        <label>Result:</label>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default SimpleCalculator;
