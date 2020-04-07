import React, { useContext } from 'react';
import { AnimeSearchForm } from '../Forms/AnimeSearchForm';
import { SearchContext } from '../../context/Contexts/SearchContext';
import { Redirect } from 'react-router-dom';

export const Home = () => {
    const { results } = useContext(SearchContext);
    let content;

    results.length
        ? (content = <Redirect to='/results' />)
        : (content = (
              <div>
                  <p>A listing of anime by category will be featured below</p>
                  <ul>
                      <li>What's popular right now</li>
                      <li>Most popular all time</li>
                      <li>New releases</li>
                  </ul>
              </div>
          ));

    return (
        <div>
            <h3>Home Page</h3>
            <p>This is a generic home page description.</p>
            <AnimeSearchForm />
            {content}
        </div>
    );
};
