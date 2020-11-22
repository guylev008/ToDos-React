import React from 'react';
import styled from 'styled-components';

const Checkbox = props => {
	return (
		<Input
			type="checkbox"
			checked={props.isCompleted}
			onChange={async event => {
				await props.handleCheckboxChange(event.target.checked, props.taskId);
			}}
		/>
	);
};

const Input = styled.input`
	width: 16px;
	height: 16px;
`;

export default Checkbox;
