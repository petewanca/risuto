import React, { useContext } from 'react';
import { UserContext } from '../../context/Contexts/UserContext';
import { Redirect } from 'react-router-dom';

export const Dashboard = () => {
    const { user, dispatch } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    auth ? (content = 'dashboard') : (content = <Redirect to='/' />);

    return (
        <div>
            {content}
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};
