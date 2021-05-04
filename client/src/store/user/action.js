export const GET_USER = 'GET_USER';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const actions = {};

actions.fetchUserRequest = () => {
	return {
		type: GET_USER,
	};
};

actions.fetchSuccess = (users) => {
	return {
		type: SUCCESS,
		payload: users,
	};
};

actions.fetchError = (error) => {
	return {
		type: FAILURE,
		payload: error,
	};
};

export default actions;
