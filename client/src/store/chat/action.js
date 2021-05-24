export const CHAT_FETCH = 'CHAT_FETCH';
export const CHAT_SUCCESS = 'CHAT_SUCCESS';
export const CHAT_FAILURE = 'CHAT_FAILURE';

const actions = {};

actions.fetchChatSuccess = (users) => {
	return {
		type: CHAT_FETCH,
		payload: users,
	};
};

export default actions;
