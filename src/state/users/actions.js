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
