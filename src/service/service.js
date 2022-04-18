import axios from 'axios';

const url = "http://localhost:8080";

export const getGoals = (email) => {
    return axios.get(url + '/api/getGoals/' + email);
};