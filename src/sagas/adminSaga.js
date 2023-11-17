
import {call, put, take, select} from "redux-saga/effects";


import {ADMIN, SLIDER} from "src/action/actionTypes";


import {getListAdmin_API} from 'src/api/admin/getList';
import {deleteAdmin} from 'src/api/admin/delete';
import {putAdmin} from 'src/api/admin/put';
import {postAdmin} from 'src/api/admin/post';
import {getLoginAdmin} from 'src/api/admin/login';
import {getAdminID} from 'src/api/admin/getAdminID';


export function* watcherCallListAdmin() {
    while (true) {
        yield take(ADMIN.CALL_GET_LIST);
        yield call(doCallListAdmin);
    }
}

export function* watcherCallDeleteAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_DELETE);
        const {payload} = takeAction;
        yield deleteAdmin(payload);
        yield call(doCallListAdmin);
    }
}
export function* watcherCallPostAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_POST_ADMIN);
        const {payload} = takeAction;
        yield postAdmin(payload);
        yield call(doCallListAdmin);
    }
}
export function* watcherCallUpdateAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_PUT);
        const {payload} = takeAction;
        yield putAdmin(payload._id, payload);
        yield call(doCallListAdmin);
    }
}
export function* watcherLoginAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.LOGIN);
        const {payload} = takeAction;
        
        const dataLogin = yield getLoginAdmin(payload.data);
       
        if(dataLogin && Object.keys(dataLogin).length > 1) {
            localStorage.setItem('token_admin', dataLogin.password);
            localStorage.setItem('id_admin', dataLogin.id_admin);
            localStorage.setItem('email_admin', dataLogin.email);
        }
    }
}
export function* watcherGetAdminId() {
    while (true) {
        const takeAction = yield take(ADMIN.GET_ADMIN);
        const {payload} = takeAction;
        const use_admin = yield getAdminID(payload.id);
        yield put({type: ADMIN.GET_ADMIN_DATA, use_admin});
    }
}


export function* doCallListAdmin() {
    const admin = yield getListAdmin_API();
    yield put({type: ADMIN.GET_LIST, admin});
}
