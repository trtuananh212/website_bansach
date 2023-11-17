
import {USER} from 'src/action/actionTypes.js';

const User = (state = {}, action) => {
    debugger; // MongLV
    switch (action.type) {
        case USER.LOGIN:
            return action.dataLogin;
        case 'LOG_OUT_USER':
            return {};
        default:
            return state;
    }
};

export default User;
