

import {ADMIN} from 'src/action/actionTypes.js';

const UseAdmin = (state = {}, action) => {
    switch (action.type) {
        case ADMIN.GET_ADMIN_DATA:
            return action.use_admin;
        default:
            return state;
    }
};

export default UseAdmin;
