import React, { useContext } from 'react';
import { UserContext } from '../context/Contexts/UserContext';
import { Redirect } from 'react-router-dom';

export const Profile = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    auth
        ? (content = (
              <div>
                  <h3>User Profile Page</h3>
                  <p>User can adjust settings, see messages, activity, etc.</p>
              </div>
          ))
        : (content = <Redirect to='/login' />);

    return content;
};
