import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const Pagination = () => {
    const { pages } = useContext(SearchContext);
    let content;

    if (pages) {
        content = (
            <div>
                <button className='btn btn-outline-success mx-2 border font-weight-bold'>
                    First Page
                </button>
                <button className='btn btn-outline-primary mx-2 border font-weight-bold'>
                    Next Page
                </button>
                <button className='btn btn-outline-success mx-2 border font-weight-bold'>
                    Last Page
                </button>
            </div>
        );
    }

    return <div className='row justify-content-center my-5'>{content}</div>;
};
