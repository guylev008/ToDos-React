import { fetchTasks, saveNewTask, updateTask } from '../../api/task';
import { fetchTasksSuccess, saveTaskSuccess, setTaskStatus } from './actions';

export const fetchUserTasks = async token => {
	return async function (dispatch) {
		try {
			const response = await fetchTasks(token);
			dispatch(fetchTasksSuccess(response));
		} catch (error) {}
	};
};

export const saveTask = async description => {
	return async function (dispatch) {
		try {
			const completed = false;
			const response = await saveNewTask(description, completed);
			dispatch(saveTaskSuccess(response));
		} catch (error) {}
	};
};

export const updateTaskStatus = async (taskId, completed) => {
	return async function (dispatch) {
		try {
			await updateTask(taskId, completed);
			dispatch(setTaskStatus(taskId, completed));
		} catch (error) {}
	};
};
