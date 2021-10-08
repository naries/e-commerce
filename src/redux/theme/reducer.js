import { themeTypes } from './actionTypes'
import { themeOptions } from './options'

const initialState = {
    primary: '#333',
    secondary: "#fff",
    complimentary: "#ccc",
    analogous: "#666",
    thinBorders: '#ddd',
    invertThinBorders: "#444",
    productInCartBackground: '#efefef',
    productInCartBorder: '#dedede',
    name: 'light',
    badgeColor: "white",
}

export const themeReducer = (state=initialState, action) => {
    switch( action.type ) {
        case themeTypes.CHANGE_THEME: 
            return { ...themeOptions[action.theme] }
        default: 
            return state
    }
}