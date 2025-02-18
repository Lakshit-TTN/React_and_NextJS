import React from 'react'

const Logout = ({handleToggle}) => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            <h2>Welcome, User! You are logged Out</h2>
            <button onClick={handleToggle}>
                Login
            </button>
        </div>
    )
}

export default Logout