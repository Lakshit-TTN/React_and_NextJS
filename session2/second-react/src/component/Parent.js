import React, { useState } from 'react';

const Parent = () => {
  const [message, setMessage] = useState('');

  const handleUpdate = (newMessage) => {
    setMessage(newMessage);
  };
  return (
    <div>
      <h1>Current Message: {message}</h1>
      <Child1 message="Message from Parent to Child 1" updateMessage={handleUpdate}/>
      <Child2 message="Message from Parent to Child 2" updateMessage={handleUpdate}/>
    </div>
  );
};

//child components
const Child1 = ({ message,updateMessage }) => {
  return (
    <div>
      <button onClick={() => updateMessage(message)}>Message One</button>
    </div>
  );
};

const Child2 = ({ message,updateMessage }) => {
  return (
    <div>
      <button onClick={() => updateMessage(message)}>Message Two</button>
    </div>
  );
};


export default Parent;
