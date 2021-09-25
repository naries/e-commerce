import { checkInternetConnection, createNetworkMiddleware, offlineActionCreators } from 'react-native-offline';
import { createStore, applyMiddleware } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../redux/rootSaga';
import rootReducer from '../redux'

  
const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
})  

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare, networkMiddleware]

const configureStore = () => {
    let store = null
    store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
    sagaMiddleWare.run(watcherSaga)
    const { connectionChange } = offlineActionCreators
    persistStore(store, null, () => {
        checkInternetConnection().then(isConnected => {
            store.dispatch(connectionChange(isConnected));
        })
    })
    return store;
}




export default configureStore();