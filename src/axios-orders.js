import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b8638.firebaseio.com/'
});

export default instance;