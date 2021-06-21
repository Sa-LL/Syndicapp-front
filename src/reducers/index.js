import { combineReducers } from 'redux';

import auth from './auth';
import services from './servicios';
import events from './eventos';
import gestor from './gestor';
export const reducers = combineReducers({
	auth,
	events,
	services,
	gestor,
});
