import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';
import { ResultContainer } from './ResultContainer';

export const SearchResults = () => {
    const { results } = useContext(SearchContext);
    let content;

    results.length
        ? (content = <ResultContainer data={results} />)
        : (content = 'there are no results');

    return (
        <div>
            <h3>Search Results</h3>
            {content}
        </div>
    );
};
