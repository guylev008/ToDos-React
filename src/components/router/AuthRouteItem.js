import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import appRoutes from '../../appRoutes';
import { getUserTokenFromCookie } from '../../utils/authUtils';

const AuthRouteItem = ({ component: Component, ...restProps }) => {
	const isAuthenticated = () => {
		return getUserTokenFromCookie();
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
