
import {CATALOG} from 'src/action/actionTypes.js';

const Catalog = (state = {}, action) => {
    debugger; // MongLV
    switch (action.type) {
        case CATALOG.GET_LIST:
            return action.catalog;
        case CATALOG.DELETE:
            return action.catalog;
        default:
            return state;
    }
};

export default Catalog;
