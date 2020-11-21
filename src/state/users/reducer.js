import initialState from '../initialState';
import types from './types';

export default function usersReducer(state = initialState.users, action) {
	switch (action.type) {
		case types.LOGIN_FAILED: {
			return state;
		}

		case types.LOGIN_SUCCESS: {
			return Object.assign({}, state, {
				name: action.user.name,
				token: action.token
			});
		}

		case types.SIGNUP_FAILED: {
			return Object.assign({}, state, {
				name: null,
				token: null
			});
		}

		case types.SIGNUP_SUCCESS: {
			return Object.assign({}, state, {
				name: action.user.name,
				token: action.token
			});
		}

		case types.FETCH_USER_SUCCESS: {
			return Object.assign({}, state, {
				name: action.user.name,
				token: action.token
			});
		}

		case types.FETCH_USER_FAILED: {
			return state;
		}

		case types.LOGOUT_USER: {
			return Object.assign({}, state, {
				name: null,
				token: null
			});
		}

		default:
			return state;
	}

	return state;
}
