import React from 'react';
import styled from 'styled-components';
import Checkbox from '../common/Checkbox';

const Task = ({ id, task, handleCheckboxChange }) => {
	return (
		<Container id="container">
			<Item>{task.description}</Item>
			<Checkbox handleCheckboxChange={handleCheckboxChange} taskId={id} isCompleted={task.completed} />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: baseline;
`;

const Item = styled.li`
	text-align: left;
	margin: 5px 5px;
	font-size: ${props => props.theme.fontSizes.fontSize0};
	font-weight: 300;
	color: ${props => props.theme.colors.lightBlack};
`;

export default Task;
