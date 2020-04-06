import React, { useState } from 'react';
import { searchByTitle } from './Action';

export const AnimeSearchForm = () => {
    const [words, setWords] = useState('');

    const search = async (e) => {
        e.preventDefault();

        try {
            const response = await searchByTitle(words);
            console.log(response);
            setWords(words.trim());
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
