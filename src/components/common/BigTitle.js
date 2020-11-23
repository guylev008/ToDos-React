import React from 'react';
import styled from 'styled-components';
import device from '../../responsive/device';

const BigTitle = props => {
	return (
		<TitleContainer>
			<Title>{props.titleText}</Title>
		</TitleContainer>
	);
};

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	width: 60%;
	margin-top: 30px;
	background-color: ${props => props.theme.colors.orange};
	border-radius: 10px;
	border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
	padding: 3.2px 19.2px;
	color: ${props => props.theme.colors.darkGray};

	@media ${device.mobileS} {
		font-size: ${props => props.theme.fontSizes.fontSize2};
	}

	@media ${device.mobileL} {
		font-size: ${props => props.theme.fontSizes.fontSize3};
	}
`;

export default BigTitle;
