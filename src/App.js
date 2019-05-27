import React from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Counter min={0} max={10}/>
    </div>
  );
};

export default App;