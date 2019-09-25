import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [count,setCount] = useState(0);

  return (
    <div className="App">
      <button id="decrement-button" onClick={()=>
        {
          !(count===0) && setCount(count-1)
        }
      }>−</button>
      <div id="number">{count}</div>
      <button id="increment-button" onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  );
};

export default App;
