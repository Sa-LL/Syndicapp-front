import { FETCH_SERVICES, CREATE_SERVICES } from '../constants/actionTypes';
import * as api from '../api/index';

export const getServices = (sindicato) => async (dispatch) => {
	try {
		const { data } = await api.fetchServices(sindicato);
		dispatch({ type: FETCH_SERVICES, data });
	} catch (error) {
		console.log(error);
	}
};

export const createServices = (newService) => async (dispatch) => {
	try {
		const { data } = await api.createServices(newService);
		dispatch({ type: CREATE_SERVICES, data });
	} catch (error) {
		console.log(error);
	}
};
