import types from './types';

export const fetchTasksSuccess = (tasks) => ({type: types.FETCH_TASKS_SUCCESS, tasks})