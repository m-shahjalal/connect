export const CHAT_FETCH = 'CHAT_FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const actions = {};

actions.fetchChat = () => {
	return {
		type: CHAT_FETCH,
	};
};

actions.fetchChatSuccess = (users) => {
	return {
		type: SUCCESS,
		payload: users,
	};
};

actions.fetchChatFailure = (error) => {
	return {
		type: FAILURE,
		payload: error,
	};
};

export default actions;
