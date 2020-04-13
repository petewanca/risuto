import React, { useContext } from 'react';
import { UserContext } from '../context/Contexts/UserContext';
import { Redirect } from 'react-router-dom';

export const MyLists = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    auth
        ? (content = (
              <div>
                  <h3>My lists</h3>
                  <p>Users can see their lists of anime.</p>
                  <ul>
                      <li>Plan to watch</li>
                      <li>Currently watching</li>
                      <li>Watched</li>
                      <li>No Longer Watching</li>
                      <li>etc.</li>
                  </ul>
              </div>
          ))
        : (content = <Redirect to='/login' />);
    return content;
};
