import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
};

const Content = styled.div`
	min-height: 100vh;
	height: fit-content;
`;
const Container = styled.div`
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	font-family: 'Architects Daughter', sans-serif;
	background-color: ${props => props.theme.colors.yellow};
	text-align: center;
	display: flex;
	justify-content: center;
	overflow-y: scroll;
`;

export default Layout;
