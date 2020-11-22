import baseTodoApiRequest from './base';

export const fetchTasks = async token => {
	const path = 'tasks';
	try {
		const response = await baseTodoApiRequest().get(path, {
			headers: { Authorization: token }
		});
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export const saveNewTask = async (description, completed) => {
	const path = 'tasks';
	try {
		const response = await baseTodoApiRequest().post(path, {
			description,
			completed
		});
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export const updateTask = async (taskId, completed) => {
	const path = `tasks/${taskId}`;
	try {
		const response = await baseTodoApiRequest().patch(path, {
			completed
		});
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
};
