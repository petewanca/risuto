import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Validate } from './Passport';
import { Login } from '../pages/Login';

const handleValidate = async () => {
    try {
        await Validate();
        return true;
    } catch (error) {
        return false;
    }
};

export const PrivateRoute = ({ path, component }) => {
    let content;
    try {
        handleValidate().then((content = <Route exact path={path} component={component} />));
    } catch (error) {
        content = <Redirect to='/login' component={Login} />;
    }

    return <>{content}</>;
};
