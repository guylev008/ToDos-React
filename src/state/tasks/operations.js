import { fetchTasks, saveNewTask } from '../../api/task';
import { fetchTasksSuccess, saveTaskSuccess } from './actions';

export const fetchUserTasks = async token => {
	return async function (dispatch) {
		try {
			const response = await fetchTasks(token);
			dispatch(fetchTasksSuccess(response));
		} catch (error) {}
	};
};

export const saveTask = async (token, description) => {
	return async function (dispatch) {
		try {
			const completed = false;
			const response = await saveNewTask(token, description, completed);
			dispatch(saveTaskSuccess(response));
		} catch (error) {}
	};
};
