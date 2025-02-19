import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeToggler;
