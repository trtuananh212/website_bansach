


// action types
import {CART} from "src/action/actionTypes";

const Cart = (state = {}, action) => {
    switch (action.type) {
        case CART.GET_LIST:
            return action.cart;
        default:
            return state;
    }
};

export default Cart;
