import axios from "axios";

const instance  = axios.create({
    // baseURL: '...'
    baseURL: 'http://127.0.0.1:5001/challenge-a4533/us-central1/api' // The API (cloud function) URL
});

export default instance;