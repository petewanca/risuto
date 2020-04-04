export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return state;

        case 'REGISTER_FAILURE':
            return state;

        case 'LOGIN_SUCCESS':
            return state;

        case 'LOGIN_FAILURE':
            return state;

        case 'SIGNOUT':
            return state;

        default:
            return state;
    }
};
