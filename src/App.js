import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}
        id="decrement-button">−</button>
      <div id="number">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        id="increment-button">+</button>
    </div>
  );

}

export default App;
