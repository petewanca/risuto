import React, { createContext, useReducer } from 'react';
import { UserReducer } from '../reducers/UserReducer';
import decode from 'jwt-decode';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(UserReducer, { loggedIn: false }, async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const currentTime = Date.now() / 1000;
            try {
                const { exp } = await decode(token);
                if (exp > currentTime) {
                    return { loggedIn: true };
                } else if (currentTime >= exp) {
                    return { loggedIn: false };
                }
            } catch (error) {
                return { loggedIn: false };
            }
        } else {
            return { loggedIn: false };
        }
    });

    return <UserContext.Provider value={{ auth, dispatch }}>{children}</UserContext.Provider>;
};
