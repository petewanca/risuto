import decode from 'jwt-decode';

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            console.log('register success dispatch running...');
            return state;

        case 'REGISTER_FAILURE':
            console.log('register failure dispatch running...');
            return state;

        case 'LOGIN_SUCCESS':
            console.log('login success dispatch running...');
            const token = action.payload.token.split(' ')[1];
            localStorage.setItem('token', token);
            return { loggedIn: true };

        case 'LOGIN_FAILURE':
            console.log('login failure dispatch running...');
            return { loggedIn: false, message: action.payload.error };

        case 'LOGOUT':
            console.log('signout dispatch running...');
            localStorage.removeItem('token');
            return { loggedIn: false };

        default:
            return state;
    }
};
