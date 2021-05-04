import { CHAT_FETCH, SUCCESS, FAILURE } from './action';

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
		case SUCCESS:
			return {
				...state,
				loading: false,
				chat: action.payload,
			};
		case FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
