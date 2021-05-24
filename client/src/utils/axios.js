import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
});
instance.defaults.headers.common['Authorization'] =
	'Bearer ' + localStorage.getItem('jwt');

instance.interceptors.request.use(
	(config) => {
		console.log(config);
		return config;
	},
	(error) => {
		if (error.request) {
			return error.request;
		} else {
			return error.message;
		}
	}
);

instance.interceptors.response.use(
	(config) => {
		localStorage.setItem('jwt', JSON.stringify(config.data.token));
		return config;
	},
	(error) => {
		if (error.response) {
			return error.response;
		} else {
			return error.message;
		}
	}
);

export default instance;
