import { FETCH_EVENTS, CREATE_EVENTS } from '../constants/actionTypes';
import * as api from '../api/index';

export const getEvents = (sindicato) => async (dispatch) => {
	try {
		const { data } = await api.fetchEvents(sindicato);
		dispatch({ type: FETCH_EVENTS, data });
	} catch (error) {
		console.log(error);
	}
};

export const createEvents = (newEvent) => async (dispatch) => {
	try {
		const { data } = await api.createEvent(newEvent);
		dispatch({ type: CREATE_EVENTS, data });
	} catch (error) {
		console.log(error);
	}
};
