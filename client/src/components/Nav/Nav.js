import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Contexts/UserContext';

export const Nav = () => {
    const { user, dispatch } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    auth
        ? (content = (
              <ul>
                  <li>
                      <Link to='/'>Home Page (app logo)</Link>
                  </li>
                  <li>
                      <Link to='/search'>Search</Link>
                  </li>
                  <li>
                      <Link to='/profile'>Profile</Link>
                  </li>
                  <li>
                      <Link to='/my-lists'>My Lists</Link>
                  </li>
                  <li>
                      <Link to='/forum'>Forum</Link>
                  </li>
                  <li>
                      <Link to='/contact'>Contact</Link>
                  </li>
                  <li>
                      <Link to='/about'>About</Link>
                  </li>
                  <li>
                      <button onClick={handleLogout}>Logout</button>
                  </li>
              </ul>
          ))
        : (content = (
              <ul>
                  <li>
                      <Link to='/'>Home Page (app logo)</Link>
                  </li>
                  <li>
                      <Link to='/search'>Search</Link>
                  </li>
                  <li>
                      <Link to='/forum'>Forum</Link>
                  </li>
                  <li>
                      <Link to='/contact'>Contact</Link>
                  </li>
                  <li>
                      <Link to='/about'>About</Link>
                  </li>
                  <li>
                      <Link to='/login'>Login</Link>
                  </li>
                  <li>
                      <Link to='/register'>Register</Link>
                  </li>
              </ul>
          ));

    return <div>{content}</div>;
};
