import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bugerbuilder-cf4e5.firebaseio.com/'
})

export default instance;