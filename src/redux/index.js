import AsyncStorage from '@react-native-async-storage/async-storage'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import { reducer as network } from 'react-native-offline'
import userReducer from './user/reducers'
import productReducer from './products/reducer'
import { themeReducer } from './theme/reducer'
import { cartReducer } from './cart/reducer'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ['network'],
}
export default persistCombineReducers(persistConfig, {
    auth: userReducer,
    products: productReducer,
    theme: themeReducer,
    cart: cartReducer,
    network
})
