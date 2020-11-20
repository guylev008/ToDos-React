import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import BigTitle from '../common/BigTitle';
import { Link } from 'react-router-dom';
import appRoutes from '../../appRoutes';

const LoginPage = () => {
	return (
		<Wrapper>
			<Container>
				<BigTitle titleText={'Login'}></BigTitle>
				<LoginForm />
				<Link to={appRoutes.signup}>SignUp</Link>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	max-width: 600px;
	padding-left: 20px;
	padding-right: 20px;
	flex-shrink: 0;
`;

export default LoginPage;
