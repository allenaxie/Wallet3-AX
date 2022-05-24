import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext({});

export const UserProvider = ({children}:any) => {
    const [currentUser, setCurrentUser] = useState('');

    return (
        // wrap application with data passed to UserContext
        <UserContext.Provider value={{
            currentUser,
            setCurrentUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}