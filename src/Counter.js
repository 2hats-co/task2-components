import React, {useState} from 'react';

function Counter(props) {
    
    const {min, max} = props;
    const [count, setCount] = useState(0);
    const onDecrement = () => {
        count > min ? setCount(count-1) : setCount(min);
    }
    const onIncrement = () => {
        count < max ? setCount(count+1) : setCount(max);
    }
    return (
        <div class="counter">
        <button id="decrement-button" onClick={onDecrement}>−</button>
        <div id="number">{count}</div>
        <button id="increment-button" onClick={onIncrement}>+</button>
        </div>
    );
}

export default Counter;