import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/Contexts/UserContext';
import { SendRegister } from './Action';

export const RegisterComp = () => {
    const { user, dispatch } = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [match, setMatch] = useState('');
    const auth = user.loggedIn;
    const registered = user.registered;
    let message = user.message;
    let content;

    const handleForm = async (e) => {
        e.preventDefault();

        if (password === match) {
            try {
                const response = await SendRegister(firstName, lastName, email, password);
                dispatch({ type: 'REGISTER_SUCCESS', payload: { message: response.data } });
            } catch (error) {
                dispatch({ type: 'REGISTER_FAILURE', payload: { message: error.response.data } });
                setPassword('');
                setMatch('');
            }
        } else {
            dispatch({ type: 'REGISTER_FAILURE', payload: { message: "Passwords don't match." } });
            setPassword('');
            setMatch('');
        }
    };

    if (auth) {
        content = <Redirect to='/profile' />;
    } else if (registered) {
        content = <Redirect to='/login' />;
    } else {
        content = (
            <div className='row justify-content-center'>
                <form onSubmit={handleForm} className='col-lg-6'>
                    <fieldset>
                        <legend className='mb-4'>Register</legend>
                        <div className='form-group'>
                            <label>First Name</label>
                            <input
                                type='text'
                                className='form-control shadow'
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                className='form-control shadow'
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email address</label>
                            <input
                                type='email'
                                className='form-control shadow'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small id='emailHelp' className='form-text text-muted'>
                                We'll never share your email with anyone without asking.
                            </small>
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
                        <div className='form-group'>
                            <label>Enter Password Again</label>
                            <input
                                type='password'
                                className='form-control shadow'
                                placeholder='Password'
                                value={match}
                                onChange={(e) => setMatch(e.target.value)}
                            />
                        </div>

                        <button type='submit' className='btn btn-primary shadow'>
                            Submit
                        </button>
                        <div className='mt-3'>
                            <small className='text-danger'>{message}</small>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }

    return <div>{content}</div>;
};
