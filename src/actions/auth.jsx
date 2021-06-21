import { AUTH, REGISTER } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);
		// const { data } = await api.fetchUsers();
		dispatch({ type: AUTH, data });
		switch (data.result.role) {
			case 'admin':
				history.push('/admin');
				break;
			case 'gestor':
				history.push('/gestor/gestionar');
				break;
			case 'trabajador':
				history.push('/afiliado/eventos');
				break;
			default:
				console.log('lol');
				break;
		}
	} catch (error) {
		console.log(error);
	}
};

export const register = (formData) => async (dispatch) => {
	try {
		const { data } = await api.createUser(formData);

		dispatch({ type: REGISTER, data });
	} catch (error) {
		console.log(error);
	}
};
