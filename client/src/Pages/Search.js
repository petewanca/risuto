import React from 'react';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { SearchResults } from '../components/Results/SearchResults';

export const Search = () => {
    return (
        <div>
            <SearchForm />
            <SearchResults />
        </div>
    );
};
