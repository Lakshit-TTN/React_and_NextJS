import React from 'react'

const DisplayStatus = ({handleToggle,message,buttonName,bgColor="red"}) => {
    return (
        <div style={{backgroundColor:`${bgColor}`}} >
            <h2>{message}</h2>
            <button onClick={handleToggle}>
                {buttonName}
            </button>
        </div>
    )
}

export default DisplayStatus