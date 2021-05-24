import { CHAT_FETCH, CHAT_FAILURE, CHAT_SUCCESS } from './action';

const initialState = {
	loading: true,
	chat: [],
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHAT_FETCH:
			return {
				...state,
				loading: true,
			};
		case CHAT_SUCCESS:
			return {
				...state,
				loading: false,
				chat: action.payload,
			};
		case CHAT_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
