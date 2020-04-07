import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { SearchResults } from '../Results/SearchResults';

export const Search = () => {
    return (
        <div>
            <h3>Search Page</h3>
            <SearchForm />
            <SearchResults />
        </div>
    );
};
