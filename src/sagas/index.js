

import { all } from "redux-saga/effects";
import {watcherCallListSlider, watcherCallPost, watcherCallDelete, watcherCallUpdate} from "./sliderSaga";
import {watcherCallPostUser, watcherLoginUser, watcherGetUserId} from "./userSaga";
import {watcherCallListAdmin, watcherCallDeleteAdmin, watcherCallUpdateAdmin, watcherCallPostAdmin, watcherLoginAdmin, watcherGetAdminId} from "./adminSaga";
import {watcherCallListCatalog, watcherCallDeleteCatalog, watcherCallPostCatalog, watcherCallPutCatalog} from './catalogSaga';
import {watcherCallListIDCatalog, watcherGetListIDCatalog, watcherCallPostProduct, watcherCallDeleteProduct, watcherPutProduct, watcherGetListProduct} from "./productSaga";
import {
    watcherCallDeleteCart,
    watcherCallUpdateCart,
    watcherDatMua,
    watcherPostCart,
    watchListCartUser
} from "src/sagas/cartSaga";

export default function* rootSaga() {
    yield all([
        watcherCallListSlider(),
        watcherCallPost(),
        watcherCallDelete(),
        watcherCallUpdate(),
        watcherCallListAdmin(),
        watcherCallDeleteAdmin(),
        watcherCallUpdateAdmin(),
        watcherCallPostAdmin(),
        watcherCallListCatalog(),
        watcherCallDeleteCatalog(),
        watcherCallPostCatalog(),
        watcherCallPutCatalog(),
        watcherCallListIDCatalog(),
        watcherGetListIDCatalog(),
        watcherCallPostProduct(),
        watcherCallDeleteProduct(),
        watcherPutProduct(),
        watcherGetListProduct(),
        watcherLoginAdmin(),
        watcherGetAdminId(),
        watcherCallPostUser(),
        watcherLoginUser(),
        watcherPostCart(),
        watchListCartUser(),
        watcherCallDeleteCart(),
        watcherCallUpdateCart(),
        watcherDatMua(),
        watcherGetUserId(),
    ]);
}
