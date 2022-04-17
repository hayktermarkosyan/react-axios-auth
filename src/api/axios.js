import axios from 'axios';

export default axios.create({
    baseURL: 'https://test-api.updivision.work/api/',
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
});