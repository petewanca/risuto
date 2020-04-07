import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';
import { Result } from './Result';

export const ResultContainer = () => {
    const { results } = useContext(SearchContext);
    return results.length ? results.map((item) => <Result key={item.id} data={item} />) : null;
};
