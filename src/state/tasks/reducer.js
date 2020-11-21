import initialState from '../initialState';
import types from './types';
import update from 'immutability-helper';

export default function tasksReducer(state = initialState.tasks, action) {
	switch (action.type) {
		case types.FETCH_TASKS_SUCCESS: {
			return Object.assign({}, state, { userTasks: action.tasks });
		}

		case types.SET_TASK_STATUS: {
			let newState = {};
			for (const key in state) {
				if (state[key]._id === action.taskId) {
					state[key].completed = action.isChecked;
				}
				Object.assign(newState, state[key]);
			}
			return Object.assign({}, state, { userTasks: newState });
		}

		case types.SAVE_TASK_SUCCESS: {
			debugger;
			let x = Object.assign({}, state, action.task);
			console.log(x);
			return x;
		}

		default:
			return state;
	}
}
