import { FETCH_USERS, FETCH_EVENTS } from '../constants/actionTypes';

const gestorReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_USERS:
			return action.data;
		case FETCH_EVENTS:
			return action.data;
		default:
			return state;
	}
};

export default gestorReducer;
