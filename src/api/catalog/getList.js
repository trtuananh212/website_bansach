

import axios from 'axios';
import {URL_API} from '../config';

export function getListCatalog_API() {
	return axios.get(`${URL_API.local}catalog`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
// http://localhost:1999/api/admin
