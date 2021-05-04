import { combineReducers } from 'redux';
import userAction from './user/action';
import chatAction from './chat/action';

const rootReducer = combineReducers({
	user: userAction,
	chat: chatAction,
});

export default rootReducer;
