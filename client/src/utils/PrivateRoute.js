import React, { useContext, useLayoutEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Validate } from './Validate';
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

    // from React's documentation...
    // The signature is identical to useEffect, but it fires synchronously
    // after all DOM mutations. Use this to read layout from the DOM and
    // synchronously re-render. Updates scheduled inside useLayoutEffect
    // will be flushed synchronously, before the browser has a chance to paint.
    // Prefer the standard useEffect when possible to avoid blocking visual updates.
    useLayoutEffect(() => {
        sendValidation();
    }, [auth]);

    return auth ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to='/login' component={Login} />
    );
};
