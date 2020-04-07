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
            <form onSubmit={handleForm}>
                <h3>{message}</h3>
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
        );
    }

    return <div>{content}</div>;
};
