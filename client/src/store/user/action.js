import userApi from '../../api/user';

export const GET_USER = 'GET_USER';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const actions = {};

actions.fetchUsers = (user) => {
	return async (dispatch) => {
		dispatch({ type: GET_USER });
		try {
			const response = await userApi.login(user);
			console.log(response);
			dispatch({
				type: SUCCESS,
				payload: {
					email: response.data.user.email,
					name: response.data.user.name,
				},
			});
		} catch (error) {
			console.log(error);
			dispatch({ type: FAILURE, payload: error.message });
		}
	};
};

export default actions;
