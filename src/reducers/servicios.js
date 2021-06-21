import { FETCH_SERVICES, CREATE_SERVICES } from '../constants/actionTypes';

const servicesReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_SERVICES:
			return action.data;
		case CREATE_SERVICES:
			return action.data;
		default:
			return state;
	}
};

export default servicesReducer;
