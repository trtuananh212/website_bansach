

import axios from 'axios';
import {URL_API} from '../config';

export function getListUser() {
	return axios.get(`${URL_API.local}user`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
// http://localhost:1999/api/admin
