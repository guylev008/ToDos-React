import types from './types';

export const fetchTasksSuccess = tasks => ({ type: types.FETCH_TASKS_SUCCESS, tasks });

export const setTaskStatus = (taskId, isChecked) => ({
	type: types.SET_TASK_STATUS,
	taskId,
	isChecked
});

export const saveTaskSuccess = task => ({
	type: types.SAVE_TASK_SUCCESS,
	task
});
