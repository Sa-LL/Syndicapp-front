import axios from 'axios';

// const API = axios.create({ baseUrl: 'http://localhost:5000' });
const url = 'https://syndicapp-back.herokuapp.com';

// API.interceptors.request.use((req) => {
// 	if (localStorage.getItem('profile')) {
// 		req.headers.Authorization = `Bearer ${
// 			JSON.parse(localStorage.getItem('profile')).token
// 		}`;
// 	}

// 	return req;
// });

export const fetchServices = (sindicato) =>
	axios.get(`${url}/servDisponibles/${sindicato}`);
export const createServices = (newService) =>
	axios.post(`${url}/servDisponibles`, newService);

export const fetchEvents = (sindicato) =>
	axios.get(`${url}/eventos/${sindicato}`);
export const createEvent = (newEvento) =>
	axios.post(`${url}/eventos`, newEvento);

export const fetchUsers = (sindicato) => axios.get(url + '/user/' + sindicato);

export const createUser = (newUser) =>
	axios.post(url + '/user/register', newUser);
export const signIn = (formData) => axios.post(url + '/user/signin', formData);
