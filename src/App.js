import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button id="decrement-button" onClick={decrement}>−</button>
      <div id="number">{count}</div>
      <button id="increment-button" onClick={increment}>+</button>
    </div>
  );
};

export default App;
