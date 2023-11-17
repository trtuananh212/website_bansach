

'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function postUser(data) {
    try {
        return axios.post(`${URL_API.local}user`, data)
            .then(res => res.data).then((result) => {
                console.log(result);
                if (result.message === 'SUCCESS') {
                    message.success('Tạo thành công')
                }else if (result.message === 'Đã có tồn tại') {
                    message.warn('Đã tồn tại email');
                } else {
                    message.error('Lỗi truyền');
                }
            })
            .catch(error => message.error('Lỗi: '+ error));
    } catch (e) {
        message.error(e);
    }
}
