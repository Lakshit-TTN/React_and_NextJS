import React, { createContext, useState,useEffect } from 'react'
import ThemeToggler from './ThemeToggler';


const ThemeContext = createContext();

const ThemeChanger = () => {

    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.className = theme; 
      }, [theme]);

    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ThemeToggler />
            </ThemeContext.Provider>
        </div>
    )
}

export  {ThemeChanger,ThemeContext} 


