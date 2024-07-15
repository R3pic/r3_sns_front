import axios from "axios";

const apiconfig = {
    baseURL: 'http://localhost:13000',
};

export const api = axios.create(apiconfig);