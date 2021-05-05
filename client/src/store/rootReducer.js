import { combineReducers } from 'redux';
import userAction from './user/reducer';
import chatAction from './chat/reducer';

const rootReducer = combineReducers({
	user: userAction,
	chat: chatAction,
});

export default rootReducer;
