 import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-e55ef.firebaseio.com/'
});

export default instance;