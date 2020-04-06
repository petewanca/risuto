import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/Contexts/UserContext';
import { Redirect } from 'react-router-dom';
import { AnimeSearchForm } from '../Forms/AnimeSearchForm';
import { SearchResults } from '../Results/SearchResults';

export const Dashboard = () => {
    const { user, dispatch } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const handleValidate = () => {
        axios({
            method: 'GET',
            url: '/api/user/auth',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
            .then((res) => console.log(res))
            .catch((err) => dispatch({ type: 'LOGOUT' }));
    };

    auth ? (content = 'dashboard') : (content = <Redirect to='/' />);

    return (
        <div>
            {content}
            <button onClick={handleLogout}>logout</button>
            <button onClick={handleValidate}>validate session</button>
            <AnimeSearchForm />
            <SearchResults />
        </div>
    );
};
