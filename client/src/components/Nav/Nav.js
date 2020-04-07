import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Contexts/UserContext';

export const Nav = () => {
    const { user } = useContext(UserContext);
    const auth = user.loggedIn;
    let content;

    auth
        ? (content = (
              <ul>
                  <li>
                      <Link to='/'>Logo</Link>
                  </li>
                  <li>
                      <Link to='/'>Profile</Link>
                  </li>
                  <li>
                      <Link to='/'>My Lists</Link>
                  </li>
                  <li>
                      <Link to='/'>Forum</Link>
                  </li>
                  <li>
                      <Link to='/'>Contact</Link>
                  </li>
                  <li>
                      <Link to='/'>About</Link>
                  </li>
                  <li>
                      <Link to='/logout'>Logout</Link>
                  </li>
              </ul>
          ))
        : (content = (
              <ul>
                  <li>
                      <Link to='/'>Logo</Link>
                  </li>
                  <li>
                      <Link to='/'>Forum</Link>
                  </li>
                  <li>
                      <Link to='/'>Contact</Link>
                  </li>
                  <li>
                      <Link to='/login'>About</Link>
                  </li>
                  <li>
                      <Link to='/'>Login</Link>
                  </li>
                  <li>
                      <Link to='/register'>Register</Link>
                  </li>
              </ul>
          ));

    return <div>{content}</div>;
};
