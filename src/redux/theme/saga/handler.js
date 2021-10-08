import { call, put } from "@redux-saga/core/effects"
import { themeActions } from "../actions";
import { getData, storeData } from "./util/asyncStore";

export function* changeTheme(action) {
    try {
        let response = yield call(storeData, {name: '@main-theme', value: action.theme})
        if(response) {
            yield put(themeActions.change_theme(getData('@main-theme')))
        }
    } catch (error) {
        // ...
    }
}
