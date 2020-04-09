import React, { useState, useContext } from 'react';
import { searchByTitle } from './Action';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const SearchForm = () => {
    const { setResults, setPages } = useContext(SearchContext);
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        if (search) {
            setMessage('');
            try {
                const response = await searchByTitle(search);
                setPages(response.data.links);
                setResults(response.data.data);
            } catch (error) {
                console.log(error.response);
            }
        } else setMessage('Enter search term');
    };

    return (
        <div className='row justify-content-center'>
            <form onSubmit={handleForm} className='col-lg-6'>
                <fieldset>
                    <legend className='mb-4'>Search Anime</legend>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control shadow'
                            placeholder='Enter search term'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <fieldset>
                        <div className='form-group'>
                            <label>Search Filter (Optional)</label>
                            <select className='form-control shadow'>
                                <option>Relevance</option>
                                <option>Title</option>
                                <option>Director</option>
                                <option>Character</option>
                                <option>Cast</option>
                            </select>
                        </div>
                    </fieldset>
                    <button type='submit' className='btn btn-primary'>
                        Search
                    </button>
                    <div className='mt-3'>
                        <small className='text-danger'>{message}</small>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};
