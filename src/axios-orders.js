import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-deepbn.firebaseio.com/'
});

export default instance;