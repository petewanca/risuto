import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/Contexts/UserContext';
import { SendLogin } from './action';

export const SignIn = () => {
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState('pete@pete.com');
    const [password, setPassword] = useState('password');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await SendLogin(email, password);
            console.log(response);
        } catch (error) {
            console.log(error.response);
        }
    };

    const auth = user.loggedIn;
    let content;

    auth
        ? (content = <Redirect to='/dashboard' />)
        : (content = (
              <form onSubmit={handleLogin}>
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
                  <input type='submit' value='sign in' />
              </form>
          ));

    return <div>{content}</div>;
};
