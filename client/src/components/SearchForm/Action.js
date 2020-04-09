import axios from 'axios';

export const searchByTitle = (params) => {
    const searchTerm = params.trim().split(' ').join('%20');
    const response = axios({
        method: 'GET',
        url: `https://kitsu.io/api/edge/anime?filter[text]=${params}`,
        headers: {
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
        },
    });
    return response;
};
