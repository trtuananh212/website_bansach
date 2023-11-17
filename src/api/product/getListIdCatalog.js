

import axios from 'axios';
import {URL_API} from '../config';

export function getListProduct_IDCatalog(id) {
    return axios.get(`${URL_API.local}product/${id}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}
// http://localhost:1999/api/admin
