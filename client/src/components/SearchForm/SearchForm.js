import React, { useState, useContext } from 'react';
import { searchByTitle } from './Action';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const SearchForm = () => {
    const { setResults, setPages } = useContext(SearchContext);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('text');
    const [limit, setLimit] = useState(10);
    const [message, setMessage] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        if (search) {
            setMessage('');
            try {
                const response = await searchByTitle(search, filter, limit);
                console.log(response);
                setPages(response.data.links);
                setResults(response.data.data);
            } catch (error) {
                console.log(error.response);
            }
        } else setMessage('Enter search term');
    };

    return (
        <div className='row justify-content-center'>
            <form onSubmit={handleForm} className='col-lg-4'>
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
                            <label>Search Filter</label>
                            <select
                                className='form-control shadow'
                                defaultValue={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value={'text'}>Relevance</option>
                                <option value={'genres'}>Genre</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className='form-group'>
                            <label>Limit</label>
                            <select
                                className='form-control shadow'
                                defaultValue={limit}
                                onChange={(e) => setLimit(e.target.value)}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
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
