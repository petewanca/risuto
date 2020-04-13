import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const Pagination = () => {
    const { pages } = useContext(SearchContext);
    let content;

    if (pages) {
        content = (
            <div>
                <button className='btn btn-primary'>test</button>
                <button>test</button>
                <button>test</button>
            </div>
        );
    }

    return <div className='row justify-content-center'>{content}</div>;
};
