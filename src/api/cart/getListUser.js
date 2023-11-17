
import axios from 'axios';
import {URL_API} from '../config';

export function getListUserIDCart(id) {
    console.log('mong'+id);
    return axios.get(`${URL_API.local}cart-user/${id}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}
