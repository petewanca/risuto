import React, { useContext } from 'react';
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
              <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
                  <a className='navbar-brand' href='/'>
                      r i s u t o
                  </a>
                  <button
                      className='navbar-toggler'
                      type='button'
                      data-toggle='collapse'
                      data-target='#navbarColor01'
                      aria-controls='navbarColor01'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                  >
                      <span className='navbar-toggler-icon'></span>
                  </button>

                  <div className='collapse navbar-collapse' id='navbarColor01'>
                      <ul className='navbar-nav mr-auto'>
                          <li className='nav-item active'>
                              <a className='nav-link' href='/search'>
                                  Search
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/profile'>
                                  Profile
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/my-lists'>
                                  My Lists
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/forum'>
                                  Forum
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/contact'>
                                  Contact
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/about'>
                                  About
                              </a>
                          </li>
                      </ul>
                      <ul className='navbar-nav'>
                          <li className='nav-item'>
                              <a className='nav-link' href='/register'>
                                  <button
                                      className='btn btn-secondary my-2 my-sm-0 btn-secondary'
                                      type='submit'
                                      onClick={handleLogout}
                                  >
                                      Logout
                                  </button>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          ))
        : (content = (
              <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
                  <a className='navbar-brand' href='/'>
                      r i s u t o
                  </a>
                  <button
                      className='navbar-toggler'
                      type='button'
                      data-toggle='collapse'
                      data-target='#navbarColor01'
                      aria-controls='navbarColor01'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                  >
                      <span className='navbar-toggler-icon'></span>
                  </button>

                  <div className='collapse navbar-collapse' id='navbarColor01'>
                      <ul className='navbar-nav mr-auto'>
                          <li className='nav-item active'>
                              <a className='nav-link' href='/search'>
                                  Search
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/forum'>
                                  Forum
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/contact'>
                                  Contact
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/about'>
                                  About
                              </a>
                          </li>
                      </ul>
                      <ul className='navbar-nav'>
                          <li className='nav-item'>
                              <a className='nav-link' href='/login'>
                                  <button
                                      className='btn btn-secondary mr-3 my-2 my-sm-0 btn-warning'
                                      type='submit'
                                  >
                                      Login
                                  </button>
                              </a>
                          </li>
                          <li className='nav-item'>
                              <a className='nav-link' href='/register'>
                                  <button
                                      className='btn btn-secondary my-2 my-sm-0 btn-success'
                                      type='submit'
                                      href='/register'
                                  >
                                      Register
                                  </button>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          ));

    return <nav className='mb-4'>{content}</nav>;
};
