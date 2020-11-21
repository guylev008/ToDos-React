import { createSelector } from 'reselect';

export const userTasks = state => state.tasks.userTasks;

export const userTasksLight = createSelector(userTasks, tasks => {
	if (!tasks) return null;
	if (Object.keys(tasks).length === 0) return null;
	let tasksArray = [];
	for (const key in tasks) {
		tasksArray.push(tasks[key]);
	}

	return tasksArray.map(task => {
		return { id: task._id, description: task.description, completed: task.completed };
	});
});
