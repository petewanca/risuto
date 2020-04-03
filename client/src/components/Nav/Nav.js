import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Sign In</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
        </ul>
    );
};
