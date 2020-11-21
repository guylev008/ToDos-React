import React from 'react';
import styled from 'styled-components';

const Checkbox = props => {
	return (
		<Input
			type="checkbox"
			onChange={event => {
				props.handleCheckboxChange(event.target.checked, props.taskId);
			}}
		/>
	);
};

const Input = styled.input`
	width: 16px;
	height: 16px;
`;

export default Checkbox;
