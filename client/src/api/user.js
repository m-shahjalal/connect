import axios from '../utils/axios';
const user = {};

user.login = (user) => axios.post('/users/login', user);
user.register = (user) => axios.post('/users/register', user);

export default user;
