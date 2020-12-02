import {default as axios} from 'axios';

// import {API_URL} from '@env';
const API_URL = 'http://3.231.106.200:8080'
console.log(API_URL)

const http = (token = null) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  console.log(API_URL)
  return axios.create({
    baseURL: API_URL,
    headers,
  });
};

export default http;
