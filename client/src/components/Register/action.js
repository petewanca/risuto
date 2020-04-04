import axios from 'axios';

export const SendRegister = (data) => {
    const response = axios({
        method: 'POST',
        url: '/api/user/register',
        data,
    });
    return response;
};
