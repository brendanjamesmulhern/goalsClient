import axios from 'axios';

const url = "http://localhost:8080";

export const getGoals = (email) => {
    return axios.get(url + '/api/getGoals/' + email);
};

export const getOneGoal = (email, id) => {
    return axios.get(url + '/api/getOneGoal/' + email + '/' + id);
};

export const addGoal = (email, out) => {
    return axios.post(url + '/api/addGoal/' + email, out);
};

export const updateGoal = (email, id, out) => {
    return axios.put(url + "/api/updateGoal/" + email + "/" + id, out);
};

export const deleteGoal = (email, id) => {
    return axios.delete(url + '/api/deleteGoal/' + email + '/' + id);
};

export const signUp = (email, password) => {
    const out = {
        email: email,
        password: password
    };
    return axios.post(url + '/api/signUp', out);
};

export const login = (email, password) => {
    const out = {
        email: email,
        password: password
    };
    return axios.post(url + '/api/login', out);
};