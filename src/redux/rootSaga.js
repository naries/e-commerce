import { all, fork, takeLatest } from "@redux-saga/core/effects";
import { userTypes } from "./user/actionTypes";
import { handleAuthentication } from "./user/sagas/handlers";

function* authenticate() {
    yield takeLatest(userTypes.LOGIN, handleAuthentication)
}

export function* watcherSaga() {
    yield all([
        fork(authenticate)
    ])
}