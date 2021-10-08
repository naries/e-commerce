import { call, put } from "@redux-saga/core/effects"
import { userActions } from "../actions"
import { authenticate } from "./requests"

export function* handleAuthentication(action) {
    try {
        const response = yield call(authenticate, action.credentials)
        yield put(userActions.login_success(response.data))
    } catch (error) {
        yield put(userActions.login_failed(e))
    }
}