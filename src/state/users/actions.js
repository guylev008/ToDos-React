import types from './types';

export const loginSuccess = ({ user, token }) => ({
	type: types.LOGIN_SUCCESS,
	user,
	token
});

export const loginFailed = error => ({
	type: types.LOGIN_FAILED,
	error
});

export const signUpSuccess = ({ user, token }) => ({
	type: types.SIGNUP_SUCCESS,
	user,
	token
});

export const signUpFailed = error => ({
	type: types.SIGNUP_FAILED,
	error
});

export const fetchUserSuccess = ({ user, token }) => ({
	type: types.FETCH_USER_SUCCESS,
	user,
	token
});

export const fetchUserFailed = error => ({
	type: types.FETCH_USER_FAILED,
	error
});

export const logoutUser = () => ({
	type: types.LOGOUT_USER
});
