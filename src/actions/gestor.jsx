import { FETCH_USERS } from '../constants/actionTypes';
import * as api from '../api/index';

export const getUsers = (sindicato) => async (dispatch) => {
	try {
		const { data } = await api.fetchUsers(sindicato);
		dispatch({ type: FETCH_USERS, data });
	} catch (error) {
		console.log(error);
	}
};
