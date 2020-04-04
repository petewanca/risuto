import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/Contexts/UserContext';

export const Register = () => {
    const { user } = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [match, setMatch] = useState('');

    const auth = user.loggedIn;
    let content;

    auth
        ? (content = <Redirect to='/dashboard' />)
        : (content = (
              <form>
                  <input
                      type='text'
                      placeholder='first'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                  <br />
                  <input
                      type='text'
                      placeholder='last'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                  />
                  <br />
                  <input
                      type='text'
                      placeholder='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                      type='password'
                      placeholder='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <input
                      type='password'
                      placeholder='again'
                      value={match}
                      onChange={(e) => setMatch(e.target.value)}
                  />
                  <br />
                  <input type='submit' value='sign in' />
              </form>
          ));

    return <div>{content}</div>;
};
