import { userTypes } from "./actionTypes"

const initialState = {
    isLoading: false,
    loaded: false,
    data: {
        token: ""
    },
    error: null
}

const userReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case userTypes.LOGIN:
            return { ...state, isLoading: true, loaded: false, data: {token: ""}, error: null } 
        case userTypes.LOGIN_SUCCESS:
            return { ...state, isLoading: false, loaded: true, data: action.data, error: null }
        case userTypes.LOGIN_FAILED:
            return { ...state, isLoading: false, loaded: true, data: {token: ""}, error: action.error }
        case userTypes.LOGIN_RESET:
            return { ...state, isLoading: false, loaded: false, data: {token: ""}, error: null }
        case userTypes.LOGOUT:
            return { ...state, isLoading: false, loaded: false, data: {token: ""}, error: null }
        default:
            return { ...state }
    }
}

export default userReducer