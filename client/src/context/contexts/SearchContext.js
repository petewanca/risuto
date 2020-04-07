import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [results, setResults] = useState('');
    const [pages, setPages] = useState('');
    return (
        <SearchContext.Provider value={{ results, setResults, pages, setPages }}>
            {children}
        </SearchContext.Provider>
    );
};
