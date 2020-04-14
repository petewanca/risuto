import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Validate } from './Passport';
import { Login } from '../pages/Login';
import { UserContext } from '../context/Contexts/UserContext';

export const PrivateRoute = ({ path, component }) => {
    const { user, dispatch } = useContext(UserContext);
    const auth = user.loggedIn;

    const sendValidation = async () => {
        try {
            await Validate();
            dispatch({ type: 'VALIDATION_SUCCESS' });
        } catch (error) {
            dispatch({
                type: 'VALIDATION_FAILURE',
                payload: { error: `Please sign in to visit the page '${path}'.` },
            });
        }
    };

    sendValidation();

    return auth ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to='/login' component={Login} />
    );
};
