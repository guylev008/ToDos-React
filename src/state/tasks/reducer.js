import initialState from '../initialState';
import types from './types';

export default function tasksReducer(state = initialState.tasks, action) {
	switch (action.type) {
		case types.FETCH_TASKS_SUCCESS:
			return Object.assign({}, state, action.tasks);
		default:
			return state;
	}
}
