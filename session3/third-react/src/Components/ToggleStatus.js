import React, { useState } from 'react';
import DisplayStatus from './DisplayStatus';

const ToggleStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setLoggedIn((prevState) => !prevState);
    };

    return (
        <div>
            {loggedIn ? (
                <DisplayStatus
                    message="Welcome Back"
                    handleToggle={handleLoginToggle}
                    buttonName="Log out"
                    bgColor="Green"
                />
            ) : (
                <DisplayStatus
                    message="Login To Continue"
                    handleToggle={handleLoginToggle}
                    buttonName="Log in"
                />
            )}
        </div>
    );
};

export default ToggleStatus;
