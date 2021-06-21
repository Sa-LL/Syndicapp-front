import { FETCH_EVENTS, CREATE_EVENTS } from '../constants/actionTypes';

const eventsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_EVENTS:
			return action.data;
		case CREATE_EVENTS:
			return action.data;
		default:
			return state;
	}
};

export default eventsReducer;
