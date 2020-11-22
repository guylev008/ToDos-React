import Cookies from 'universal-cookie';

export const getUserTokenFromCookie = () => {
	let cookies = new Cookies();
	return cookies.get('userToken');
};

export const removeUserTokenCookie = () => {
	const cookies = new Cookies();
	cookies.remove('userToken');
};

export const setUserTokenCookie = token => {
	const cookies = new Cookies();
	cookies.set('userToken', token, { path: '/', expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000) });
};
