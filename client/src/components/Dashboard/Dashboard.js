import React, { useContext } from 'react';
import { UserContext } from '../../context/Contexts/UserContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export const Dashboard = () => {
    const { user, dispatch } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    // https://kitsu.docs.apiary.io/
    const getAnime = async () => {
        axios({
            method: 'GET',
            url: `https://kitsu.io/api/edge/anime?filter[text]=cowboy`,
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    auth ? (content = 'dashboard') : (content = <Redirect to='/' />);

    return (
        <div>
            {content}
            <br />
            <button onClick={getAnime}>get anime</button>
            <br />
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};
