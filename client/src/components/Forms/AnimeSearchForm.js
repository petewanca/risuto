import React, { useState, useContext } from 'react';
import { searchByTitle } from './Action';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const AnimeSearchForm = () => {
    const { setResults } = useContext(SearchContext);
    const { setPages } = useContext(SearchContext);
    const [words, setWords] = useState('');

    const search = async (e) => {
        e.preventDefault();

        try {
            const response = await searchByTitle(words);
            console.log(response);
            setResults(response.data.data);
            setPages(response.data.links);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div>
            <h3>Search Form</h3>
            <form onSubmit={search}>
                <input
                    placeholder='title'
                    value={words}
                    onChange={(e) => setWords(e.target.value)}
                />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
};
