import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Validate } from './Passport';
import { Login } from '../pages/Login';
import { UserContext } from '../context/Contexts/UserContext';

export const PrivateRoute = ({ path, component }) => {
    const { dispatch } = useContext(UserContext);

    const sendValidation = async () => {
        try {
            await Validate();
            dispatch({ type: 'VALIDATION_SUCCESS' });
        } catch (error) {
            dispatch({ type: 'VALIDATION_FAILURE', payload: { error: error.response.data } });
        }
    };

    // let content;
    // try {
    //     handleValidate().then((content = <Route exact path={path} component={component} />));
    // } catch (error) {
    //     content = <Redirect to='/login' component={Login} />;
    // }
    sendValidation();
    return <Route exact path={path} component={component} />;
};
