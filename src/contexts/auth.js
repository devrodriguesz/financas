import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});


function AuthProvider( { children } ){
    const [user, SetUser] = useState({
        nome: 'Emerson',
        uid: '1213213542121324'
    });

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;