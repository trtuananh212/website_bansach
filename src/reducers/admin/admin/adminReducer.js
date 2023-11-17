

import {ADMIN} from 'src/action/actionTypes.js';

const Admin = (state = {}, action) => {
    switch (action.type) {
        case ADMIN.GET_LIST:
            return action.admin;
        case ADMIN.DELETE:
            return state;
        default:
            return state;
    }
};

export default Admin;
