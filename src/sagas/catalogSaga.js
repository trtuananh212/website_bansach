
import {call, put, take} from 'redux-saga/effects';


import {CATALOG} from 'src/action/actionTypes';


import {getListCatalog_API} from 'src/api/catalog/getList';
import {postCatalog} from 'src/api/catalog/post';
import {putCatalog} from 'src/api/catalog/put';
import {deleteCatalog} from "src/api/catalog/delete";


export function* watcherCallListCatalog() {
    while (true) {
        yield take(CATALOG.CALL_GET_LIST);
        yield call(doCallListCatalog);
    }
}

export function * watcherCallDeleteCatalog() {
    while (true) {
        const takeAction = yield take(CATALOG.CALL_DELETE);
        const {payload} = takeAction;
        yield deleteCatalog(payload);
        yield call(doCallListCatalog);
    }
}

export function* watcherCallPostCatalog() {
    while (true) {
        const takeAction = yield take(CATALOG.CALL_POST);
        const {payload} = takeAction;
        const {data} = payload;
        yield postCatalog(data);
        yield call(doCallListCatalog);
    }
}
export function* watcherCallPutCatalog() {
    while (true) {
        const takeAction = yield take(CATALOG.CALL_PUT);
        const {payload} = takeAction;
        const {id, data} = payload;
        yield putCatalog(id, data);
        yield call(doCallListCatalog);
    }
}


export function* doCallListCatalog() {
    const catalog = yield getListCatalog_API();
    yield put({type: CATALOG.GET_LIST, catalog});
}
