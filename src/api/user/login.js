
import axios from 'axios';
import {URL_API} from '../config';
import {message} from "antd";

export function getLoginUser(data) {
    debugger;
    try {
        return axios.post(`${URL_API.local}user/login`, data)
            .then(res => res.data)
            .catch(error => message.error('Tài khoản hoặc mật khẩu không đúng'));
    } catch (e) {
        message.error(e);
    }
}
