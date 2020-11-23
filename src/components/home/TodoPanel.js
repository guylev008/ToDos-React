import React, { useState } from 'react';
import { saveTask, updateTaskStatus } from '../../state/tasks/operations';
import styled from 'styled-components';
import Header from './Header';
import TasksList from './TasksList';
import { useDispatch } from 'react-redux';
import device from '../../responsive/device';

const TodoPanel = props => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const handleSave = async task => {
		await dispatch(await saveTask(task));
		setInput('');
	};

	const handleTaskStatus = async (value, taskId) => {
		await dispatch(await updateTaskStatus(taskId, value));
	};

	const checkItem = () => {};

	return (
		<Container>
			<Header addItem={handleSave} input={input} setInput={setInput} name={props.name} />
			<TasksList tasks={props.tasks} checkItem={checkItem} handleTaskStatus={handleTaskStatus} />
		</Container>
	);
};

const Container = styled.div`
	margin: 50px auto;
	padding: 16px;
	width: 100%;
	max-width: 500px;
	background-color: #f1f5f8;
	background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
	background-size: 40px 40px;
	border-radius: 20px;
	box-shadow: 4px 3px 7px 2px #00000040;
	display: flex;
	flex-direction: column;

	@media ${device.desktop} {
		min-height: 750px;
	}

	@media ${device.mobileS} {
		min-height: 400px;
	}

	@media ${device.mobileL} {
		min-height: 500px;
	}

	@media ${device.tablet} {
		min-height: 650px;
	}
`;

export default TodoPanel;
