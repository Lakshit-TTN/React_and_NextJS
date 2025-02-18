import React, { useState } from 'react';
import Logout from './Logout'
import Login from './Login'

const ToggleView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
        {isLoggedIn ? (<Logout handleToggle={toggleLoginLogout}/>) : ( <Login handleToggle={toggleLoginLogout}/>)}
    </div>
  );
};

export default ToggleView;
