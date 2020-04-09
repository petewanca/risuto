import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/Contexts/UserContext';
import { SendLogin } from './Action';

export const LoginComp = () => {
    const { user, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = user.loggedIn;
    const message = user.message;
    let content;

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const response = await SendLogin(email, password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { token: response.data.token } });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: { error: error.response.data } });
            setPassword('');
        }
    };

    auth
        ? (content = <Redirect to='/profile' />)
        : (content = (
              <div className='row justify-content-center'>
                  <form onSubmit={handleForm} className='col-lg-6'>
                      <fieldset>
                          <legend className='mb-4'>Login</legend>
                          <div className='form-group'>
                              <label>Email address</label>
                              <input
                                  type='email'
                                  className='form-control shadow'
                                  placeholder='Enter email'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                              />
                          </div>
                          <div className='form-group'>
                              <label>Password</label>
                              <input
                                  type='password'
                                  className='form-control shadow'
                                  placeholder='Password'
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                              />
                          </div>

                          <button type='submit' className='btn btn-primary'>
                              Submit
                          </button>
                          <div className='mt-3'>
                              <small className='text-danger'>{message}</small>
                          </div>
                      </fieldset>
                  </form>
              </div>
          ));

    return <div>{content}</div>;
};
