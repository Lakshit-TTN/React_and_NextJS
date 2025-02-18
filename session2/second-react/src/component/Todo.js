import React, { useState } from 'react'

const Todo = () => {
    const [addTask, setAddTask] = useState([]);
    const [inp, setInp] = useState('');

    function handleAdd() {
        setAddTask([...addTask,inp]);
        setInp('');
    }
    function handleClear() {
        setAddTask([]);
        setInp('');
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            <input type='text' value={inp} onChange={((e) => setInp(e.target.value))}></input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {addTask.map((ele, index) => (
                    <li key={index}>{ele}</li>
                ))}
            </ul>
            <button onClick={handleClear}>Clear List</button>
        </div>
    )
}

export default Todo