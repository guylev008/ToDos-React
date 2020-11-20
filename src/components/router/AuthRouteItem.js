import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Cookies from 'universal-cookie';
import appRoutes from '../../appRoutes';

const AuthRouteItem = ({ component: Component, ...restProps }) => {
	const isAuthenticated = () => {
		const cookies = new Cookies();
		return cookies.get('userToken');
	};

	return (
		<Route
			{...restProps}
			render={props => {
				return isAuthenticated() ? (
					<Layout>
						<Component {...props} />
					</Layout>
				) : (
					<Redirect to={appRoutes.login}></Redirect>
				);
			}}
		/>
	);
};

export default AuthRouteItem;
