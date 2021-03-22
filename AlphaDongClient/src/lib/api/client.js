import axios from 'axios';

const client = axios.create({
  baseURL: 'http://3.35.188.80:5001/',
});

export default client;
