import AsyncStorage from '@react-native-async-storage/async-storage'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import userReducer from './user/reducers'
import { reducer as network } from 'react-native-offline'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ['network'],
}
export default persistCombineReducers(persistConfig, {
    auth: userReducer,
    network
})
