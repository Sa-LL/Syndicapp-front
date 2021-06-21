import axios from 'axios';

// const API = axios.create({ baseUrl: 'http://localhost:5000' });
const url = 'http://localhost:5000';

// API.interceptors.request.use((req) => {
// 	if (localStorage.getItem('profile')) {
// 		req.headers.Authorization = `Bearer ${
// 			JSON.parse(localStorage.getItem('profile')).token
// 		}`;
// 	}

// 	return req;
// });

export const fetchUsers = () => axios.get(url + '/user');

export const createUser = (newUser) =>
	axios.post(url + '/user/register', newUser);
export const signIn = (formData) => axios.post(url + '/user/signin', formData);
