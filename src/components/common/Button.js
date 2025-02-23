import React from 'react';
import styled from 'styled-components';
import device from '../../responsive/device';

const Button = props => {
	return <AddItemButton onClick={async () => await props.handleClick(props.data)}>{props.text}</AddItemButton>;
};

const AddItemButton = styled.button`
	margin-top: 30px;
	border: 3px solid hsl(198, 1%, 29%);
	border-radius: 8px;
	padding: 10px 15px;
	font-family: 'Architects Daughter', sans-serif;
	font-size: ${props => props.theme.fontSizes.fontSize1};

	@media ${device.mobileL} {
		padding: 5px 10px;
	}

	@media ${device.mobileS} {
		padding: 5px 10px;
	}
`;

export default Button;
