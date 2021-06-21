import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);

		// const { data } = await api.fetchUsers();
		dispatch({ type: AUTH, data });

		// switch (key) {
		//     case value:

		//         break;

		//     default:
		//         break;
		// }
		console.log(data);
		// history.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const register = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.createUser(formData);

		dispatch({ type: AUTH, data });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
