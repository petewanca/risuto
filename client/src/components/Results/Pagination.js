import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const Pagination = () => {
    const { pages } = useContext(SearchContext);
    let content;

    if (pages) {
        content = (
            <div>
                <button className='btn btn-outline-primary mx-2 border'>First Page</button>
                <button className='btn btn-outline-primary mx-2 border'>Next Page</button>
                <button className='btn btn-outline-primary mx-2 border'>Last Page</button>
            </div>
        );
    }

    return <div className='row justify-content-center my-5'>{content}</div>;
};
