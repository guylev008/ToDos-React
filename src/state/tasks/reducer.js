import initialState from '../initialState';
import types from './types';

export default function tasksReducer(state = initialState.tasks, action) {
	switch (action.type) {
		case types.FETCH_TASKS_SUCCESS: {
			return Object.assign({}, state, { userTasks: action.tasks });
		}

		case types.SET_TASK_STATUS: {
			let tasks = [];
			tasks = state.userTasks.map(task => {
				if (task._id === action.taskId) {
					task.completed = action.isChecked;
				}
				return task;
			});
			return Object.assign({}, state, { userTasks: tasks });
		}

		case types.SAVE_TASK_SUCCESS: {
			let tasks = [...state.userTasks];
			tasks.push(action.task);
			return Object.assign({}, state, { userTasks: tasks });
		}

		case types.RESET_TASKS: {
			return Object.assign({}, state, initialState.tasks);
		}

		default:
			return state;
	}
}
