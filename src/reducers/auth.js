import { AUTH, REGISTER, FETCH_USERS } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return state;
		case REGISTER:
			return action.data;
		case AUTH:
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action?.data })
			);
			return {
				...state,
				authData: action.data,
				loading: false,
				errors: null,
			};
		default:
			return state;
	}
};

export default authReducer;
