import { userTypes } from "./actionTypes";

export const userActions = {
    login: credentials => ({ type: userTypes.LOGIN, credentials }),
    login_success: data => ({ type: userTypes.LOGIN_SUCCESS, data }),
    login_failed: error => ({ type: userTypes.LOGIN_FAILED, error }),
    login_reset: () => ({ type: userTypes.LOGIN_RESET }),
    logout: () => ({ type: userTypes.LOGOUT })
}