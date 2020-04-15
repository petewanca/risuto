import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';
import { Pagination } from './Pagination';
import { Result } from './Result';

export const SearchResults = () => {
    const { results } = useContext(SearchContext);
    let content;

    results
        ? (content = results.map((item) => <Result data={item} key={item.id} />))
        : (content = null);

    return (
        <>
            <div className='row justify-content-center'>
                <>{content}</>
            </div>
            <Pagination />
        </>
    );
};
