import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1)
    }
    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>Counter By Function Component</h1>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter