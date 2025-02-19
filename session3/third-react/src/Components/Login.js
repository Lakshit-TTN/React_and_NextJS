import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    setUser({ username, email })
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="Username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter Username"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="Email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login
