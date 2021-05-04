import { SUCCESS, GET_USER, FAILURE } from './action';

const initialState = {
	loading: true,
	user: [],
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				loading: true,
			};
		case SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
				error: null,
			};
		case FAILURE:
			return {
				...state,
				user: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
