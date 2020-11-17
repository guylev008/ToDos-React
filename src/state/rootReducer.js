import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { tasksReducer } from './tasks';

export default combineReducers({
	users: usersReducer,
	tasks: tasksReducer
});