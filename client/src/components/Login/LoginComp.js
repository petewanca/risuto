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
              <form onSubmit={handleForm} className='col-lg-6'>
                  <fieldset>
                      <legend>Login</legend>
                      <div className='form-group'>
                          <label htmlFor='exampleInputEmail1'>Email address</label>
                          <input
                              type='email'
                              className='form-control'
                              id='exampleInputEmail1'
                              aria-describedby='emailHelp'
                              placeholder='Enter email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>
                      <div className='form-group'>
                          <label htmlFor='exampleInputPassword1'>Password</label>
                          <input
                              type='password'
                              className='form-control'
                              id='exampleInputPassword1'
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
          ));

    return <div>{content}</div>;
};
