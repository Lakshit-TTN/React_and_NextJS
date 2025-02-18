import React from 'react'

const Login = ({handleToggle}) => {
    return (
        <div style={{ backgroundColor: 'lightgreen'}}>
            <h2>Welcome, {}! You are logged in.</h2>
            <button onClick={handleToggle}>
                Logout
            </button>
        </div>
    )
}

export default Login