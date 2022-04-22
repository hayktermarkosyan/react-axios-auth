import axios from 'axios';

const client =  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

client.interceptors.request.use(function (config) {
  return {
    ...config, 
    headers:{
      "Accept": "application/json",
      "Authorization": "Bearer "  +  localStorage.getItem("token")
    }
  };
}, function (error) {
  return Promise.reject(error);
});

export default client;