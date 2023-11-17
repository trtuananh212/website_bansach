

'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function deleteSlider(id) {
    try {
        return axios.delete(`${URL_API.local}slider/${id}`)
            .then(res => res.data).then((result) => {
                if (result.message === 'SUCCESS') {
                    message.success('Xóa thành công')
                } else {
                    message.error('Lỗi rồi !');
                }
            })
            .catch(error => message.error(error));
    } catch (e) {
        console.log('postSlider: ' + e);
    }
}
