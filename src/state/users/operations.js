import { loginUser, signUpUser } from '../../api/user';
import { loginSuccess, loginFailed, signUpSuccess, signUpFailed } from '../users/actions';
import Cookies from 'universal-cookie';

export const handleLogin = async (email, password) => {
	return async function (dispatch) {
		try {
			const response = await loginUser(email, password);
			dispatch(loginSuccess(response));
			const cookies = new Cookies();
			cookies.remove('userToken');
			cookies.set('userToken', response.data.token, { path: '/', expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000) });
		} catch (error) {
			dispatch(loginFailed(error));
		}
	};
};

export const handleSignUp = async (name, email, password) => {
	return async function (dispatch) {
		try {
			const response = await signUpUser(name, email, password);
			dispatch(signUpSuccess(response));
			const cookies = new Cookies();
			cookies.remove('userToken');
			cookies.set('userToken', response.token, { path: '/', expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000) });
		} catch (error) {
			console.log(error);
			dispatch(signUpFailed(error));
		}
	};
};
