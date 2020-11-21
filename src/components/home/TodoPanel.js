import React, { useState } from 'react';
import { saveTask } from '../../state/tasks/operations';
import styled from 'styled-components';
import Header from './Header';
import TasksList from './TasksList';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';

const TodoPanel = props => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const handleSave = async task => {
		let cookies = new Cookies();
		const token = cookies.get('userToken');
		await dispatch(await saveTask(token, task));
		setInput('');
	};

	const checkItem = () => {};

	return (
		<Container>
			<Header addItem={handleSave} input={input} setInput={setInput} />
			<TasksList tasks={props.tasks} checkItem={checkItem} />
		</Container>
	);
};

const Container = styled.div`
	margin: 50px auto;
	padding: 16px;
	min-height: 580px;
	max-width: 300px;
	background-color: #f1f5f8;
	background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
	background-size: 40px 40px;
	border-radius: 20px;
	box-shadow: 4px 3px 7px 2px #00000040;
`;

export default TodoPanel;
