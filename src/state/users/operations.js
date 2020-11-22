import { loginUser, signUpUser, fetchUserDetails } from '../../api/user';
import { loginSuccess, loginFailed, signUpSuccess, signUpFailed, fetchUserSuccess, fetchUserFailed } from '../users/actions';
import { removeUserTokenCookie, setUserTokenCookie } from '../../utils/authUtils';

export const handleLogin = async (email, password) => {
	return async function (dispatch) {
		try {
			const response = await loginUser(email, password);
			dispatch(loginSuccess(response));
			removeUserTokenCookie();
			setUserTokenCookie(response.token);
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
			removeUserTokenCookie();
			setUserTokenCookie(response.token);
		} catch (error) {
			dispatch(signUpFailed(error));
		}
	};
};

export const fetchUser = async token => {
	return async function (dispatch) {
		try {
			const response = await fetchUserDetails(token);
			dispatch(fetchUserSuccess({ user: response, token: token }));
		} catch (error) {
			dispatch(fetchUserFailed(error));
		}
	};
};
