


import {call, put, take, select} from 'redux-saga/effects';

import {CART} from 'src/action/actionTypes';

import {postCart} from 'src/api/cart/post';
import {getListUserIDCart} from 'src/api/cart/getListUser'
import {deleteCart} from 'src/api/cart/delete'
import {putCart} from "src/api/cart/put";



export function* watchListCartUser() {
    while (true) {
        yield take('watchListCartUser');
        if(localStorage.getItem('id_user')) {
            const cart = yield getListUserIDCart(localStorage.getItem('id_user'));
            yield put({type: CART.GET_LIST, cart});
        }

    }
}

export function* watcherPostCart() {
    while (true) {
        const takeAction = yield take(CART.CALL_POST);
        const {payload} = takeAction;
        const {data} = payload;
        yield postCart(data);
        yield put({type: 'watchListCartUser'});
    }
}
//
export function* watcherCallDeleteCart() {
    while (true) {
        const takeAction = yield take(CART.CALL_DELETE);
        const {payload} = takeAction;
        yield deleteCart(payload.id);
        yield put({type: 'watchListCartUser'});
    }
}
//
export function* watcherCallUpdateCart() {
    while (true) {
        const takeAction = yield take(CART.CALL_PUT);
        const {payload} = takeAction;
        const {id, data} = payload;
        yield putCart(id, data);
        yield put({type: 'watchListCartUser'});
    }
}
export function* watcherDatMua() {
    while (true) {
        const takeAction = yield take('DAT_MUA');
        const {payload} = takeAction;
        const {dataObj} = payload;
        const data = {...dataObj};
        // yield Object.keys(dataObj).map((item, index)=> {
        //     debugger; // MongLV
        //     debugger; // MongLV
        //     data[item].status = true;
        //     debugger; // MongLV
        //     putCart(item, data);
        //     debugger; // MongLV
        // });
        for(let i = 0; i<= Object.keys(dataObj).length; i++){
            yield data[Object.keys(dataObj)[i]].status = true;
            yield putCart(Object.keys(dataObj)[i], data);
        }

        yield put({type: 'watchListCartUser'});
    }
}
//
// // -------------------------------------- do Saga ---------------------------------------/

//
// export function* doDeleteSlider(id) {
//     const {Slider} = yield select();
//     delete Slider[id];
//     const slider = {...Slider};
//     yield put({type: SLIDER.DELETE, slider})
// }
