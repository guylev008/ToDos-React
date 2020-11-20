import React from 'react';
import routes from '../../appRoutes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthRouteItem from './AuthRouteItem';
import RouteItem from './RouteItem';
import HomePage from '../home/HomePage';
import LoginPage from '../login/LoginPage';
import SignUpPage from '../signup/SignUpPage';
import ErrorBoundary from '../errors/ErrorBoundry';
import NotFoundPage from '../errors/NotFoundPage';

const ApplicationRouter = () => {
	return (
		<Router basename="/">
			<ErrorBoundary>
				<Switch>
					<RouteItem exact component={LoginPage} path={routes.login} />
					<RouteItem exact component={SignUpPage} path={routes.signup} />
					<AuthRouteItem exact component={HomePage} path={routes.todo} />
					<RouteItem path={routes.notFound} component={NotFoundPage} />
					<Redirect from="/" to={routes.login} />
					<Redirect from="*" to={routes.notFound} />
				</Switch>
			</ErrorBoundary>
		</Router>
	);
};

export default ApplicationRouter;
