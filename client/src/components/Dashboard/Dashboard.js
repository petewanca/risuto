import React, { useContext } from 'react';
import { UserContext } from '../../context/Contexts/UserContext';
import { Redirect } from 'react-router-dom';
import { AnimeSearchForm } from '../Forms/AnimeSearchForm';
import { SearchResults } from '../Results/SearchResults';

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    auth ? (content = 'dashboard') : (content = <Redirect to='/' />);

    return (
        <div>
            {content}
            <AnimeSearchForm />
            <SearchResults />
        </div>
    );
};
