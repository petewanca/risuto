export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return state;

        case 'SIGNUP_FAILURE':
            return state;

        case 'SIGNIN_SUCCESS':
            return state;

        case 'SIGNIN_FAILURE':
            return state;

        case 'SIGNOUT':
            return state;

        default:
            return state;
    }
};
